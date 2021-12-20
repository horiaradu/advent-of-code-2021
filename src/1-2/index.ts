import { readFile } from "fs/promises";
import { countOfIncreases } from "../1-1";

const main = async () => {
  try {
    const data = await readFile("./src/1-2/input.txt", "utf8");

    const { windows } = data.split("\n").reduce(
      (acc: { windows: number[][]; currentWindows: number[][] }, line) => {
        const current = parseInt(line, 10);

        const currentWindows = acc.currentWindows;
        if (acc.currentWindows.length !== 3) {
          currentWindows.push([]);
        }
        currentWindows.forEach((window) => window.push(current));

        return {
          windows: [
            ...acc.windows,
            ...currentWindows.filter((window) => window.length === 3),
          ],
          currentWindows: currentWindows.filter(
            (window) => window.length !== 3
          ),
        };
      },
      { windows: [], currentWindows: [] }
    );

    console.log(windows);

    const count = countOfIncreases(
      windows.map((x) => x.reduce((a, b) => a + b))
    );

    console.log(count);
  } catch (error) {
    console.error(error);
  }
};

main();
