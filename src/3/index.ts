import { readFile } from "fs/promises";

const computeDigitCounts = (numbers: string[]) => {
  return numbers.reduce((acc: any[], line) => {
    if (line.length === 0) {
      return acc;
    }
    if (acc.length === 0) {
      return line.split("").map((bit) => ({ "0": 0, "1": 0, [bit]: 1 }));
    }
    return line
      .split("")
      .map((bit, idx) => ({ ...acc[idx], [bit]: acc[idx][bit] + 1 }));
  }, []);
};

const computeOxygen = (
  numbers: string[],
  occurences: any[],
  index = 0
): string => {
  const occurence = occurences[index];
  const digit = occurence["0"] > occurence["1"] ? "0" : "1";
  numbers = numbers.filter((n) => n[index] === digit);
  if (numbers.length === 1) {
    return numbers[0];
  }

  return computeOxygen(numbers, computeDigitCounts(numbers), index + 1);
};

const computeCO2 = (
  numbers: string[],
  occurences: any[],
  index = 0
): string => {
  const occurence = occurences[index];
  const digit = occurence["0"] <= occurence["1"] ? "0" : "1";
  numbers = numbers.filter((n) => n[index] === digit);
  if (numbers.length === 1) {
    return numbers[0];
  }

  return computeCO2(numbers, computeDigitCounts(numbers), index + 1);
};

const main = async () => {
  try {
    const data = await readFile("./src/3/input.txt", "utf8");
    // const data =
    //   "00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010";
    const numbers = data.split("\n");
    const digitsData = computeDigitCounts(numbers);

    const gammaBinary = computeOxygen(numbers, digitsData);
    const gamma = parseInt(gammaBinary, 2);

    const epsilonBinary = computeCO2(numbers, digitsData);
    const epsilon = parseInt(epsilonBinary, 2);

    console.log(gammaBinary);
    console.log(epsilonBinary);
    console.log(gamma * epsilon);
  } catch (error) {
    console.error(error);
  }
};

main();
