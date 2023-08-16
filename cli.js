"use strict";
import { program } from "commander";
import give_me_answer from "./magic.js";

program
  .version("1.0.0")
  .description("this is a simple JSON key value discriminator.")
  .option("-d , --dir <type>", "directory folder name (required)")
  .option("-f ,--first <type>", "first json name - main file (required)")
  .option("-s ,--second <type>", "second json name - compare file (required)")
  .action(() => {
    give_me_answer();
  });
program.command("*", { noHelp: true }).action(() => {
  console.log("cannot find commander.");
  program.help();
});

program.parse(process.argv);
