import { readFile } from "fs/promises";

const main = async () => {
  try {
    const data = await readFile("./src/2-1/input.txt", "utf8");
    // const data = "forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2";

    const { depth, position } = data.split("\n").reduce(
      ({ depth, position, aim }, line) => {
        const [cmd, v] = line.split(" ");
        const value = parseInt(v, 10);

        switch (cmd) {
          case "forward":
            return {
              depth: depth + value * aim,
              position: position + value,
              aim,
            };
          case "down":
            return { depth, position, aim: aim + value };
          case "up":
            return { depth, position, aim: aim - value };
          default:
            return { depth, position, aim };
        }
      },
      { depth: 0, position: 0, aim: 0 }
    );

    console.log(depth * position);
  } catch (error) {
    console.error(error);
  }
};

main();
