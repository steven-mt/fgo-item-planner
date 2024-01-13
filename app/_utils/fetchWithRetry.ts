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

  throw new Error("Max fetch retries reached");
};
