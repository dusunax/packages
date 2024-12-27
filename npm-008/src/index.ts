interface ColorWeaverOption {
  lightTextColor: string;
  darkTextColor: string;
}

const DEFAULT_OPTION: ColorWeaverOption = {
  lightTextColor: "white",
  darkTextColor: "black",
};

class ColorWeaver {
  constructor(private option: ColorWeaverOption = DEFAULT_OPTION) {}

  getTextColor(color: string) {
    return this.isColorDark(color)
      ? this.option.lightTextColor
      : this.option.darkTextColor;
  }

  isColorDark(color: string) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }
}

export { ColorWeaver };
