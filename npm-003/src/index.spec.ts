import { helloRandomName } from "./index";

describe("NPM Package", () => {
  it("should be an object", () => {
    expect(helloRandomName).toBeInstanceOf(Object);
  });

  it("should have a getName", () => {
    expect(helloRandomName.getName).toBeDefined();
  });

  it("should have a getAllNames", () => {
    expect(helloRandomName.getAllNames).toBeDefined();
  });
});
