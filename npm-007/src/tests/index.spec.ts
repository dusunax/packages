import {
  coloredStatusCode,
  changeStatusColorSettings,
  COLOR_CODES,
} from "../index";

describe("coloredStatusCode", () => {
  it("should return the correct colored status code for 200", () => {
    expect(coloredStatusCode(200)).toBe(
      `${COLOR_CODES.green}200${COLOR_CODES.reset}`
    );
  });

  it("should return the correct colored status code for 404", () => {
    expect(coloredStatusCode(404)).toBe(
      `${COLOR_CODES.red}404${COLOR_CODES.reset}`
    );
  });

  it("should return the reset color for an unknown status code", () => {
    expect(coloredStatusCode(999)).toBe(
      `${COLOR_CODES.reset}999${COLOR_CODES.reset}`
    );
  });
});

describe("changeStatusColorSettings", () => {
  it("should change the color of a status code", () => {
    changeStatusColorSettings(200, "yellow");
    expect(coloredStatusCode(200)).toBe(
      `${COLOR_CODES.yellow}200${COLOR_CODES.reset}`
    );
  });

  it("should throw an error for empty parameter", () => {
    const changeStatusColorSettingsFn = changeStatusColorSettings as any;
    expect(() => changeStatusColorSettingsFn()).toThrow(/Invalid/);
  });

  it("should throw an error for invalid status code", () => {
    expect(() => changeStatusColorSettings(600 as any, "red")).toThrow(
      /Invalid/
    );
  });

  it("should throw an error for invalid color", () => {
    expect(() => changeStatusColorSettings(200, "invalidColor" as any)).toThrow(
      /Invalid/
    );
  });
});
