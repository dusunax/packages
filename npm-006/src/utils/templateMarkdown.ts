import fs from "fs";
import path from "path";
import { Configs } from "./configuration";

/** Function to fill the template with dynamic data ✨ */
export const fillMarkdownVariables = (
  replacements: Configs,
  templatePath: string
): string => {
  const templateContent = fs.readFileSync(templatePath, "utf-8");
  let filledContent = templateContent;

  if (!templateContent) {
    throw new Error(`Template is empty or not found`);
  }

  for (const [key, value] of Object.entries(replacements)) {
    filledContent = filledContent.replace(new RegExp(`{{${key}}}`, "g"), value);
  }
  return filledContent;
};

/** Function to create a Markdown file 📝 */
export const createMarkdownFile = (
  replacements: Configs,
  templatePath: string
) => {
  const content = fillMarkdownVariables(replacements, templatePath);
  const { username, dateString } = replacements;

  const filePath = path.join(
    process.cwd(),
    "docs",
    username,
    `${dateString}.md`
  );

  const dirname = path.dirname(filePath);
  !fs.existsSync(dirname) && fs.mkdirSync(dirname);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created ${dateString}.md`);
  } else {
    console.error(`🚫 "${filePath}" already exists 😅`);
  }
};
