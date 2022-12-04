import { readFile } from "fs/promises";

const main = async () => {
  try {
    const data = await readFile("./src/2022/week3/input.txt", "utf8");

    const lines = data.split("\n");

    let sum = 0;
    lines.forEach((line) => {
      const [first, second] = [
        line.slice(0, line.length / 2),
        line.slice(line.length / 2),
      ];

      const itemsInBoth = first
        .split("")
        .filter((item) => second.includes(item));

      const uniqueItems = new Set(itemsInBoth);

      sum += Array.from(uniqueItems).reduce(
        (acc, item) => acc + getValue(item),
        0
      );
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
