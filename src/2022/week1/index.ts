import { readFile } from "fs/promises";

const main = async () => {
  try {
    const data = await readFile("./src/2022/week1/input.txt", "utf8");

    const lines = data.split("\n");

    const max = [0, 0, 0];
    let current = 0;

    lines.forEach((line) => {
      console.log(line);
      if (!line) {
        const toReplace = max.findIndex((m) => m < current);
        if (toReplace !== -1) {
          max.splice(toReplace, 1, current);
        }

        current = 0;
      } else {
        current += parseInt(line, 10);
      }
    });

    console.log(max.reduce((a, b) => a + b, 0));
  } catch (error) {
    console.error(error);
  }
};

main();
