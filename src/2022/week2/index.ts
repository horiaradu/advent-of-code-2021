import { readFile } from "fs/promises";

type Letter = "A" | "B" | "C";
type Outcome = "X" | "Y" | "Z";

const main = async () => {
  try {
    const data = await readFile("./src/2022/week2/input.txt", "utf8");

    const lines = data.split("\n");

    let score = 0;

    lines.forEach((line) => {
      const opponent = line[0];
      const me = line[2];
      console.log(opponent, me);
      score +=
        getValue(getLetter(me as Outcome, opponent as Letter)) +
        getScore(me as Outcome);
    });

    console.log(score);
  } catch (error) {
    console.error(error);
  }
};

function getLetter(outcome: Outcome, opponent: Letter): Letter {
  if (outcome === "Y") {
    return opponent;
  }

  if (opponent === "A") {
    return outcome === "Z" ? "B" : "C";
  } else if (opponent === "B") {
    return outcome === "Z" ? "C" : "A";
  } else {
    return outcome === "Z" ? "A" : "B";
  }
}

function getValue(symbol: Letter): number {
  if (symbol === "A") {
    return 1;
  } else if (symbol === "B") {
    return 2;
  } else {
    return 3;
  }
}

function getScore(symbol: Outcome): number {
  if (symbol === "X") {
    return 0;
  } else if (symbol === "Y") {
    return 3;
  } else {
    return 6;
  }
}

main();
