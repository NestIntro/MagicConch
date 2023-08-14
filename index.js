import answerlist from "./answer.json" assert { type: "json" };
import * as readline from "readline";
import chalkRainbow from "chalk-rainbow";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default function give_me_answer() {
  rl.setPrompt("> ");
  rl.prompt();
  rl.on("line", function (line) {
    switch (line) {
      case "quit":
        rl.close();

      default:
        console.log(
          "🐚 :",
          chalkRainbow(answerlist.answers[Math.floor(Math.random() * 32 + 1)])
        );
        rl.prompt();
    }
  });
  rl.on("close", function () {
    process.exit();
  });
}

// give_me_answer();
