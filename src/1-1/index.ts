import { readFile } from "fs/promises";

export const countOfIncreases = (series: number[]): number => {
  const { count } = series.reduce(
    (acc: { previous: number | null; count: number }, current) => {
      if (acc.previous === null) {
        return { previous: current, count: 0 };
      }

      if (current > acc.previous) {
        return { previous: current, count: acc.count + 1 };
      }

      return { previous: current, count: acc.count };
    },
    { previous: null, count: 0 }
  );
  return count;
};

const main = async () => {
  try {
    const data = await readFile("./src/1-1/input.txt", "utf8");

    const count = countOfIncreases(
      data.split("\n").map((x) => parseInt(x, 10))
    );
    console.log(count);
  } catch (error) {
    console.error(error);
  }
};

// main();
