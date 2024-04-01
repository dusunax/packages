import fs from "fs";
import path from "path";

const jsonFilePath = path.join(__dirname, "config.json");
const templatePath = path.join(__dirname, "template", "markdown.md");

type Config = Record<"username" | "title" | "dateString", string>;

/** Read configuration values from JSON file 📖 */
function readConfigJSON(): Record<string, string> {
  try {
    const data = fs.readFileSync(jsonFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

/** Function to get option value from command line arguments ⌨️ */
function getOptionCLI(option: string): string | null {
  const optionIndex = process.argv.indexOf(`--${option}`);
  if (optionIndex !== -1 && process.argv[optionIndex + 1]) {
    return process.argv[optionIndex + 1];
  }
  return null;
}

/** Save configuration values to the JSON file 💾 */
function saveConfigJSON(config: Config) {
  fs.writeFileSync(jsonFilePath, JSON.stringify(config, null, 2));
  console.log("✅ Configuration saved");
}

/** Function to get the current date 📅 */
function getCurrentDateString(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Function to fill the template with dynamic data ✨ */
function fillMarkdownVariables(
  templatePath: string,
  replacements: Config
): string {
  const templateContent = fs.readFileSync(templatePath, "utf-8");
  let filledContent = templateContent;
  for (const [key, value] of Object.entries(replacements)) {
    filledContent = filledContent.replace(new RegExp(`{{${key}}}`, "g"), value);
  }
  return filledContent;
}

/** Function to create a Markdown file 📝 */
function createMarkdownFile(templatePath: string, replacements: Config) {
  const content = fillMarkdownVariables(templatePath, replacements);
  const { username, dateString } = replacements;

  const filePath = path.join(
    process.cwd(),
    "docs",
    username,
    `${dateString}.md`
  );

  if (fs.existsSync(filePath)) {
    console.error(`🚫 "docs/${username}/${dateString}.md" already exists 😅`);
    return;
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Created ${dateString}.md`);
}

function main() {
  // 🛠️ Read config
  const savedConfig = readConfigJSON();
  const title = getOptionCLI("title") || savedConfig.title || ""; // Optional config

  const username = getOptionCLI("username") || savedConfig.username;
  if (!username) {
    console.error("🚫 Please enter your name");
    return;
  }
  const dateString = getCurrentDateString();
  const config = { username, title, dateString };

  // 💾 Save md file
  createMarkdownFile(templatePath, config);
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
