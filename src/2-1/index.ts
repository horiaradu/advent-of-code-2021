import { readFile } from "fs/promises";

const main = async () => {
  try {
    const data = await readFile("./src/2-1/input.txt", "utf8");

    const { depth, position } = data.split("\n").reduce(
      ({ depth, position }, line) => {
        const [cmd, value] = line.split(" ");
        switch (cmd) {
          case "forward":
            return { depth, position: position + parseInt(value, 10) };
          case "down":
            return { depth: depth + parseInt(value, 10), position };
          case "up":
            return { depth: depth - parseInt(value, 10), position };
          default:
            return { depth, position };
        }
      },
      { depth: 0, position: 0 }
    );

    console.log(depth * position);
  } catch (error) {
    console.error(error);
  }
};

main();
