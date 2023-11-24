import { getData } from "../_utils/getData";
import { TestItem } from "./TestItem";

export const TestSC = async () => {
  const data = await getData();

  return (
    <>
      <div>{data[0].atkBase}</div>

      <TestItem data={data} />
    </>
  );
};
