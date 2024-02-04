import { HelloHelp } from "../abstract/help.printer";
import { helloHelpCli } from "../cli/cli";

export default (function () {
  const helloHelp = new HelloHelp(
    "🦄 hello-help ✨",
    "print your --help option easy",
    {
      hello: {
        optionName: "hello",
        description: "nice to say hello to you 👋",
      },
      heart: {
        optionName: "heart",
        shortenOptionName: "ht",
        description: "need a heart? 🩷",
      },
    }
  );

  helloHelpCli(helloHelp);
})();
