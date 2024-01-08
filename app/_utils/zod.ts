import { z } from "zod";
import { isEmptyObject } from "./isEmptyObject";

/**
 * Gives an enum of numbers as `z.enum` only can declare a schema with string
 * values.
 *
 * This workaround is taken from {@link https://github.com/colinhacks/zod/issues/1118#issuecomment-1235065111},
 * though a `z.coerce` has been added so it can accept numbers as strings, such
 * as those in object keys.
 *
 * @param values
 * @returns
 */
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

/**
 * Produces a record similarly to `z.record`, except with required instead of
 * optional keys.
 *
 * This is a workaround to avoid producing a partial record from `z.record()`
 * when using a union or enum schema as keys, and is based on these two
 * solutions:
 * - {@link https://github.com/colinhacks/zod/issues/2623#issuecomment-1849464377}
 * - {@link https://github.com/colinhacks/zod/issues/2623#issuecomment-1864951654}
 *
 * @returns
 */
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
