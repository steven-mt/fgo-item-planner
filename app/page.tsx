"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
import { AccountForm } from "./_components/AccountForm";
import { AuthForm } from "./_components/AuthForm";
import { useUserContext } from "./_hooks/useUserContext";
import { Database } from "./_types/supabase";

export default function Home() {
  const { currentUser, setCurrentUser } = useUserContext();

  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) setCurrentUser(session.user);
      else setCurrentUser(null);
    };

    getUser();
  }, [setCurrentUser, supabase.auth]);

  return (
    <>
      <AuthForm />
      {currentUser && (
        <>
          <AccountForm user={currentUser} />
        </>
      )}
    </>
  );
}
