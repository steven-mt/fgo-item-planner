export const getBaseUrl = () => {
  if (typeof window !== "undefined") return window.location.origin;

  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    `http://localhost:${process.env.PORT ?? 3000}/`;

  // Make sure to include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;

  return url;
};

/**
 * Get the URL to the callback route that the user would be redirected to during
 * Supabase authentication.
 */
export const getRedirectURL = () => {
  let url = getBaseUrl();

  return new URL("auth/callback", url).href;
};
