import { z } from "zod";

export const isEmptyObject = (obj: object) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
};

/**
 * A wrapper for the `fetch()` method that allows for multiple attempts in the
 * event that the fetch fails.
 *
 * @param input
 * This defines the resource that you wish to fetch. This can either be:
 * - A string or any other object with a stringifier — including a URL object —
 * that provides the URL of the resource you want to fetch.
 * - A Request object.
 * @param maxAttempts The maximum number of attempts to make before throwing an error.
 * @param retryDelay The amount of time in milliseconds to wait between attempts.
 * @param init An object containing any custom settings you want to apply to the request.
 *
 * @returns A Promise that resolves to a Response object.
 *
 * @see https://developer.mozilla.org/docs/Web/API/fetch
 */
export const fetchWithRetry = async (
  input: RequestInfo | URL,
  maxAttempts: number,
  retryDelay: number,
  init?: RequestInit | undefined,
) => {
  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

  console.log(`Fetching from ${input}`);

  for (var i = 0; i < maxAttempts; i++) {
    try {
      console.log(`(${i + 1}/${maxAttempts})`);
      const response = await fetch(input, init);

      console.log("Fetch success");

      return response;
    } catch (error) {
      console.group("Fetch retry error: ");
      if (error instanceof Error) console.log(error.message);
      else console.log(error);
      console.groupEnd();
    }

    await timer(retryDelay);
  }

  throw new Error("max fetch retries reached");
};

// zod numeric enum workaround from https://github.com/colinhacks/zod/issues/1118#issuecomment-1235065111
// modified to coerce strings (from object keys) to numbers
export const zodNumericEnum = <TValues extends readonly number[]>(
  values: TValues,
) => {
  return z.coerce.number().superRefine((val, ctx) => {
    if (!values.includes(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_enum_value,
        options: [...values],
        received: val,
      });
    }
  }) as z.ZodType<TValues[number]>;
};

// workaround to avoid producing a partial record from z.record when using enum key
// modified version taken from these two solutions:
// https://github.com/colinhacks/zod/issues/2623#issuecomment-1849464377
// https://github.com/colinhacks/zod/issues/2623#issuecomment-1864951654
export const zodStrictRecord = <
  K extends z.ZodType<string | number | symbol>,
  V extends z.ZodTypeAny,
>(
  zKey: K,
  zValue: V,
) => {
  return z
    .record(zKey, zValue)
    .superRefine((input, ctx): input is Record<z.infer<K>, z.infer<V>> => {
      if (isEmptyObject(input)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "object is empty",
        });
      }

      Object.entries(input).every(
        ([key, value]) =>
          zKey.safeParse(key).success && zValue.safeParse(value).success,
      );

      return z.NEVER;
    });
};
