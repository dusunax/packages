import { COLORS, colorType } from "../constant/color";
import { Options } from "./option.interface";

export class HelloHelp {
  primaryColor: string;

  constructor(
    private project: string,
    private introduce = "",
    private options?: Record<string, Options>,
    private titleColor: colorType = "blue"
  ) {
    this.primaryColor =
      COLORS[this.titleColor.toLowerCase() as keyof typeof COLORS];
  }

  stdout() {
    return {
      help: () => console.log(this._getHelpStr()),
      introduce: () => console.log(this._getIntroduceStr()),
    };
  }

  colorPrimary(text: string): string {
    return `${this.primaryColor}${text}${COLORS["reset"]}`;
  }

  _getIntroduceStr(): string {
    return `
${this.colorPrimary(this.project)} ${
      this.introduce ? "\n" + this.introduce : ""
    }

${COLORS["black"]}--help, -h${COLORS["reset"]}`;
  }

  _getHelpStr() {
    let array = [];
    for (let option in this.options) {
      const opt = this.options[option];
      const { optionName, description } = opt;
      const shortenOptionName = opt.shortenOptionName
        ? ", -" + opt.shortenOptionName
        : "";

      const row = `--${optionName}${shortenOptionName}: ${description}`;
      array.push(row);
    }

    return `
${this.colorPrimary(`${this.project} options`)}
${array.join("\n")}
    `;
  }
}
