import npmPackage from "../index";

describe("NPM Package", () => {
  it("should be an object", () => {
    expect(npmPackage).toBeInstanceOf(Object);
  });

  it("should have a heart", () => {
    expect(npmPackage.HelloHelp).toBeDefined();
  });
});
