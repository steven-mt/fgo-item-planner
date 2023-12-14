export const isEmpty = (obj: any) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
};

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
