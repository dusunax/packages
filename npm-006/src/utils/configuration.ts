import fs from "fs";
import { CONFIG_FILE_PATH } from "../filePath";

export type Configs = Record<
  "username" | "title" | "dateString" | "template",
  string
>;

/** Read configuration values from JSON file 📖 */
export const readConfigJSON = (): Record<string, string> => {
  try {
    const data = fs.readFileSync(CONFIG_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
};

/** Save configuration values to the JSON file 💾 */
export const saveConfigJSON = (config: Configs) => {
  fs.writeFileSync(CONFIG_FILE_PATH, JSON.stringify(config, null, 2));

  console.log("✅ Configuration saved");
};
