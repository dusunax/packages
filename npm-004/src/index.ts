import exampleHelpCli from "./example/cli";
import { HelloHelp } from "./abstract/help.printer";
import { helloHelpCli } from "./cli/cli";
import { Command } from "commander";

const program = new Command();
program.description("help").option("--help");
program.parse();

export default { HelloHelp, helloHelpCli, exampleHelpCli };
