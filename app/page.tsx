import { AccountForm } from "./_components/AccountForm";
import { Planner } from "./_components/Planner";

export default async function Home() {
  return (
    <>
      <AccountForm />

      <Planner />
    </>
  );
}
