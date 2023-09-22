"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Database } from "../types/supabase";

export const AuthForm = () => {
  const supabase = createClientComponentClient<Database>();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getRedirectURL = () => {
    console.log(process?.env?.NEXT_PUBLIC_SITE_URL);
    console.log(process?.env?.NEXT_PUBLIC_VERCEL_URL);

    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      "http://localhost:3000/auth/callback";

    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`;

    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: getRedirectURL(),
      },
    });

    if (error) alert(error);
    else {
      setLoading(false);
      alert("Check email");
    }
  };

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
      </div>
    </>
  );
};
