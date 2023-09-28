"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useHash } from "../_hooks/useHash";
import { Database } from "../types/supabase";

export const AuthForm = () => {
  const supabase = createClientComponentClient<Database>();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getRedirectURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      "http://localhost:3000/auth/callback";

    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`;

    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

    url = url.endsWith("auth/callback/") ? url : `${url}auth/callback/`;

    return url;
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setErrorDescription("");

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: getRedirectURL(),
      },
    });

    if (error) alert(error);
    else alert("Check email");

    setLoading(false);
  };

  const [errorDescription, setErrorDescription] = useState("");
  const hash = useHash();
  useEffect(() => {
    const parsedHash = new URLSearchParams(hash as string);
    const parsedError = parsedHash.get("error_description");

    parsedError ? setErrorDescription(parsedError) : setErrorDescription("");

    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }, [hash]);

  return (
    <>
      <div className="flex w-full flex-col items-center">
        <form
          className="w-60 border-black bg-gray-200 text-center"
          onSubmit={handleSignIn}
        >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            className="w-full bg-gray-200"
            onChange={handleChange}
            required
          />
          <button>{loading ? "Signing in..." : "Sign In"}</button>
        </form>
        {errorDescription && <div>{errorDescription}</div>}
      </div>
    </>
  );
};
