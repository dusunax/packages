import { ColorWeaver } from "../index";

const DARK_COLORS = ["#000000", "#123456", "#12aa56", "#1255dd", "#dd5511"];
const LIGHT_COLORS = ["#FFFFFF", "#FF88CC", "#aaeeaa", "#aaaadd", "#a88ee8"];

describe("PaletteUI 기능 테스트", () => {
  describe("getTextColor", () => {
    it(`should return light text color for dark background. 어두운 배경에 대해서는 밝은 텍스트 색상을 반환합니다.`, () => {
      const colorWeaver = new ColorWeaver();
      DARK_COLORS.forEach((color) => {
        expect(colorWeaver.getTextColor(color)).toBe("white");
      });
    });

    it("should return dark text color for light background. 밝은 배경에 대해서는 어두운 텍스트 색상을 반환합니다.", () => {
      const colorWeaver = new ColorWeaver();
      LIGHT_COLORS.forEach((color) => {
        expect(colorWeaver.getTextColor(color)).toBe("black");
      });
    });

    it("should use custom colors when options are provided. 옵션이 제공되면 사용자 정의 색상을 사용합니다.", () => {
      const colorWeaver = new ColorWeaver({
        lightTextColor: "#EEEEEE",
        darkTextColor: "#111111",
      });
      DARK_COLORS.forEach((color) => {
        expect(colorWeaver.getTextColor(color)).toBe("#EEEEEE");
      });
      LIGHT_COLORS.forEach((color) => {
        expect(colorWeaver.getTextColor(color)).toBe("#111111");
      });
    });
  });

  describe("isColorDark", () => {
    it("should correctly identify dark colors. 어두운 색상을 식별합니다.", () => {
      const colorWeaver = new ColorWeaver();
      DARK_COLORS.forEach((color) => {
        expect(colorWeaver.isColorDark(color)).toBe(true);
      });
    });

    it("should correctly identify light colors. 밝은 색상을 식별합니다.", () => {
      const colorWeaver = new ColorWeaver();
      LIGHT_COLORS.forEach((color) => {
        expect(colorWeaver.isColorDark(color)).toBe(false);
      });
    });
  });
});
