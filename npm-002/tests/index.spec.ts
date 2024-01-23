import "mocha";
import { exec } from "child_process";
import { assert } from "chai";

function removeSpace(str: string): string {
  return str.split("\n").join("").split(" ").join("");
}

describe("AsciiHello", function () {
  it("should print ASCII art when --hello option is provided", function (done) {
    exec("ts-node src/index.ts --hello", (error: any, stdout: string) => {
      const expectedOutput = `
      H   H  EEEEE  L        L        OOO
      H   H  E      L        L       O   O
      HHHHH  EEEE   L        L       O   O
      H   H  E      L        L       O   O
      H   H  EEEEE  LLLLL    LLLLL    OOO
      `;

      assert.equal(removeSpace(stdout), removeSpace(expectedOutput));
      assert.isNull(error);
      done();
    });
  });

  it("should not print ASCII art when --hello option is not provided", function (done) {
    exec("ts-node src/index.ts", (error: any, stdout: string, stderr: any) => {
      assert.equal(stdout.trim(), "");
      assert.equal(stderr, "");
      assert.isNull(error);
      done();
    });
  });
});

describe("AsciiHello", function () {
  it("should print colored ASCII art when --hello option is provided", function (done) {
    exec("ts-node src/index.ts --hello", (error: any, stdout: string) => {
      const expectedOutput = `
      H   H  EEEEE  L        L        OOO
      H   H  E      L        L       O   O
      HHHHH  EEEE   L        L       O   O
      H   H  E      L        L       O   O
      H   H  EEEEE  LLLLL    LLLLL    OOO
      `;

      assert.equal(removeSpace(stdout), removeSpace(expectedOutput));
      assert.isNull(error);
      done();
    });
  });

  it("should print nothing when --hello option is not provided (colored)", function (done) {
    exec("ts-node src/index.ts", (error: any, stdout: string, stderr: any) => {
      assert.equal(stdout.trim(), "");
      assert.equal(stderr, "");
      assert.isNull(error);
      done();
    });
  });
});
