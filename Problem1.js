const inquirer = require("inquirer");

const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playGame = (x, y) => {
  let count = 0;
  let current = 0;
  let prev = 0;

  while (prev != x || current != y) {
    prev = current;
    current = randomNumberInRange(1, 6);
    count++;
  }
  return count;
};

const Question = {
  type: "list",
  name: "direction",
  message: "Which Game you wanna play",
  choices: ["Game 1", "Game 2"],
};

function main() {
  inquirer.prompt(Question).then((answers) => {
    if (answers.direction === "Game 1") {
      console.log("Player need to pay $" + playGame(6, 5));
    } else if (answers.direction === "Game 2") {
      console.log("Player need to pay $" + playGame(5, 5));
    }
  });
}

main();
