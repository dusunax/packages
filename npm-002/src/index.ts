import { Command } from "commander";
import { asciiHello } from "./ascii/asciiHello";
import { coloredAsciiHello } from "./ascii/coloredAsciiHello";

const program = new Command();

program.description('Prints "Hello" in ASCII art').option("--hello");
program.description('Prints "Hello" in Colorful ASCII art').option("--color");
program.description("help").option("--help");
program.parse();
const options = program.opts();

console.log(`
♥︎ hello-ascii
--help
`);

if (options.hello && !options.color) console.log(asciiHello());
if (options.hello && options.color) console.log(coloredAsciiHello());
if (options.help)
  console.log(`--hello : print Hello in ASCII art
--\x1b[31mh\x1b[32me\x1b[33ml\x1b[35ml\x1b[34mo\x1b[0m --\x1b[31mc\x1b[32mo\x1b[33ml\x1b[35mo\x1b[34mr\x1b[0m : print Hello in colored ASCII art
  `);
