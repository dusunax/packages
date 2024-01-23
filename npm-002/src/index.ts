#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program.description('Prints "Hello" in ASCII art').option("--hello");
program.parse();
const options = program.opts();

const asciiHello = () => {
  return `
    H   H  EEEEE  L        L        OOO
    H   H  E      L        L       O   O
    HHHHH  EEEE   L        L       O   O
    H   H  E      L        L       O   O
    H   H  EEEEE  LLLLL    LLLLL    OOO
  `;
};

if (options.hello) console.log(asciiHello());
