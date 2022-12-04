import { readFile } from "fs/promises";

const main = async () => {
  try {
    const data = await readFile("./src/2022/week3/input.txt", "utf8");

    const lines = data.split("\n");

    let sum = 0;
    let backpacks: string[] = [];
    lines.forEach((line) => {
      backpacks.push(line);

      if (backpacks.length !== 3) {
        return;
      }

      const itemsInAll = backpacks[0].split("").filter((item) => {
        return backpacks[1].includes(item) && backpacks[2].includes(item);
      });

      const uniqueItems = new Set(itemsInAll);
      console.log(uniqueItems);

      sum += Array.from(uniqueItems).reduce(
        (acc, item) => acc + getValue(item),
        0
      );

      backpacks = [];
    });

    console.log(sum);
  } catch (error) {
    console.error(error);
  }
};

function getValue(symbol: string): number {
  if (symbol.match(/[a-z]/)) {
    return symbol.charCodeAt(0) - 96;
  } else {
    return symbol.charCodeAt(0) - 65 + 27;
  }
}

main();
