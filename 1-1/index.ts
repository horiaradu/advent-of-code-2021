import { readFile } from "fs/promises";

const main = async () => {
  try {
    const data = await readFile("./1-1/input.txt", "utf8");

    const { count } = data.split("\n").reduce(
      (acc: { previous: number | null; count: number }, line) => {
        if (acc.previous === null) {
          return { previous: parseInt(line, 10), count: 0 };
        }

        const current = parseInt(line, 10);
        if (current > acc.previous) {
          return { previous: current, count: acc.count + 1 };
        }

        return { previous: current, count: acc.count };
      },
      { previous: null, count: 0 }
    );
    console.log(count);
  } catch (error) {
    console.error(error);
  }
};

main();
