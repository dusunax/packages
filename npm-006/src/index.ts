import path from "path";
import { getOptionCLI } from "./utils/command";
import { readConfigJSON, saveConfigJSON } from "./utils/configuration";
import {
  createMarkdownFile,
  fillMarkdownVariables,
} from "./utils/templateMarkdown";
import { getGithubUsername } from "./utils/getGithubUsername";
import { getCurrentDateString } from "./utils/getCurrentDateString";
import { TEMPLATE_PATH } from "./filePath";

function main() {
  // 🛠️ Read config
  const savedConfig = readConfigJSON();

  const title = getOptionCLI("title") || savedConfig.title || ""; // Optional config
  const username = savedConfig.username || getGithubUsername();
  if (!username) {
    console.error("🚫 Please set up your name first!");
    return;
  }
  const templatePath =
    path.join(__dirname, "../template/" + savedConfig.template) ||
    TEMPLATE_PATH;
  const dateString = getCurrentDateString();

  const newName = getOptionCLI("username");
  if (newName) {
    saveConfigJSON({
      username: newName,
      title,
      dateString,
      template: templatePath.split("template")[1] || "markdown.md",
    });
    return;
  }

  const config = {
    username,
    title,
    dateString,
    template: templatePath.split("template")[1] || "markdown.md",
  };
  // 💾 Save md file
  createMarkdownFile(config, templatePath);
  // 💾 Save config to JSON file
  saveConfigJSON(config);
}

main();

export {
  createMarkdownFile,
  getCurrentDateString,
  fillMarkdownVariables,
  readConfigJSON,
};
