import { Command } from "commander";
import { asciiHello } from "./ascii/asciiHello";
import { coloredAsciiHello } from "./ascii/coloredAsciiHello";

const program = new Command();

program.description('Prints "Hello" in ASCII art').option("--hello");
program.description('Prints "Hello" in Colorful ASCII art').option("--color");
program.parse();
const options = program.opts();

if (options.hello && !options.color) console.log(asciiHello());
if (options.hello && options.color) console.log(coloredAsciiHello());
