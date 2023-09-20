import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AccountForm } from "./_components/AccountForm";
import { AuthForm } from "./_components/AuthForm";
import { Database } from "./types/supabase";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      <div>hi</div>
      <AuthForm />
      {session && (
        <>
          <AccountForm session={session} />
        </>
      )}
    </>
  );
}
