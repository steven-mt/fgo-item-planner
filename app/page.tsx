import { Suspense } from "react";
import { AccountForm } from "./_components/AccountForm";
import { AuthForm } from "./_components/AuthForm";
import { TestSC } from "./_components/TestSC";

export default async function Home() {
  return (
    <>
      <AuthForm />

      <AccountForm />

      <Suspense fallback={<p>Loading...</p>}>
        <TestSC />
      </Suspense>
    </>
  );
}
