import { AccountForm } from "./_components/AccountForm";
import { AuthForm } from "./_components/AuthForm";
import { TestDataRoute } from "./_components/TestDataRoute";

export default async function Home() {
  return (
    <>
      <AuthForm />

      <AccountForm />

      <TestDataRoute />
    </>
  );
}
