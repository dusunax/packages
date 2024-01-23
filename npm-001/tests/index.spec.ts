import "mocha";
import { assert } from "chai";

import npmPackage from "../src";
const { heart, check, fire } = npmPackage;

describe("NPM Package", () => {
  it("should be an object", () => {
    assert.isObject(npmPackage);
  });

  it("should have a heart", () => {
    assert.property(npmPackage, "heart");
  });
});

// Emojis
describe("a heart Function", () => {
  it("should be a function", () => {
    assert.isFunction(heart);
  });

  it("should return the heart emoji", () => {
    const expected = "❤️";
    const actual = heart();
    assert.equal(actual, expected);
  });
});

describe("a check Function", () => {
  it("should be a function", () => {
    assert.isFunction(check);
  });

  it("should return the check emoji", () => {
    const expected = "✅";
    const actual = check();
    assert.equal(actual, expected);
  });
});

describe("a fire Function", () => {
  it("should be a function", () => {
    assert.isFunction(fire);
  });

  it("should return the fire emoji", () => {
    const expected = "🔥";
    const actual = fire();
    assert.equal(actual, expected);
  });
});
