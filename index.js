import answerlist from "./answer.json" assert { type: "json" };
import * as readline from "readline";
import chalkRainbow from "chalk-rainbow";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showHelp() {
  console.log(`
  Usage: [library-name] [options]
  
  Options:
    --help      Show help (this message)
    quit        Quit the program
    `);
}

export function give_me_answer() {
  if (process.argv.includes("--help")) {
    showHelp();
    process.exit();
  }

  rl.setPrompt("> ");
  rl.prompt();
  rl.on("line", function (line) {
    switch (line) {
      case "quit":
        rl.close();

      case "help":
        showHelp();
        // rl.close();
        break;

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

give_me_answer();
