import "mocha";
import { assert } from "chai";

import { heart } from "../src/index";
import npmPackage from "../src/index";

describe("NPM Package", () => {
  it("should be an object", () => {
    assert.isObject(npmPackage);
  });

  it("should have a heart", () => {
    assert.property(npmPackage, "heart");
  });
});

describe("Heart Function", () => {
  it("should be a function", () => {
    assert.isFunction(heart);
  });

  it("should return the heart emoji", () => {
    const expected = "❤️";
    const actual = heart();
    assert.equal(actual, expected);
  });
});
