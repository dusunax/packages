import { Command } from "commander";
import { HelloHelp } from "../abstract/help.printer";

export const helloHelpCli = (helpInterface: HelloHelp) => {
  const program = new Command();
  program.description("help").option("-h --help");
  program.description("coverage").option("--coverage");
  program.parse();
  const options = program.opts();

  if (options.help) return helpInterface.stdout().help();
  helpInterface.stdout().introduce();
};
