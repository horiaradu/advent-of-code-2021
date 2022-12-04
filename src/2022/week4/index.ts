import { readFile } from "fs/promises";

const main = async () => {
  try {
    const data = await readFile("./src/2022/week4/input.txt", "utf8");

    const lines = data.split("\n");

    let count = 0;
    lines.forEach((line) => {
      const data = line.match(/([0-9]+)-([0-9]+),([0-9]+)-([0-9]+)/);
      if (!data) {
        return;
      }

      const [_, s1String, e1String, s2String, e2String] = data;
      const [s1, e1, s2, e2] = [s1String, e1String, s2String, e2String].map(
        (x) => parseInt(x, 10)
      );
      // if ((s1 <= s2 && e1 >= e2) || (s2 <= s1 && e2 >= e1)) {
      //   count += 1;
      // }

      if (
        (s1 <= s2 && e1 >= s2) ||
        (s1 <= s2 && e1 >= e2) ||
        (s1 <= e2 && e1 >= e2) ||
        (s2 <= s1 && e2 >= e1)
      ) {
        count += 1;
      }
    });

    console.log(count);
  } catch (error) {
    console.error(error);
  }
};

main();
