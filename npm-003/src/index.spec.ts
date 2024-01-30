import { helloName } from "./index";

describe("NPM Package", () => {
  it("should be an object", () => {
    expect(helloName).toBeInstanceOf(Object);
  });

  it("should have a getName", () => {
    expect(helloName.getName).toBeDefined();
  });

  it("should have a getAllNames", () => {
    expect(helloName.getAllNames).toBeDefined();
  });
});
