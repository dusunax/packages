import { execSync } from "child_process";

describe("cli", () => {
  let spyLog: jest.SpyInstance;

  beforeEach(() => {
    spyLog = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  it("should print introduce if --help option is not provided", () => {
    const result = execSync(`ts-node src/index.ts`, {
      encoding: "utf8",
    });

    expect(result).not.toBeNull();
    expect(result).toMatchSnapshot();
  });

  it("should print introduce if --help option is not provided", () => {
    const result = execSync(`ts-node src/index.ts --help`, {
      encoding: "utf8",
    });

    expect(result).not.toBeNull();
    expect(result).toMatchSnapshot();
  });
});
