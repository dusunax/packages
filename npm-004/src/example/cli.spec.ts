import helloHelpCli from "./cli";

describe("cli", () => {
  let spyLog: jest.SpyInstance;

  beforeEach(() => {
    spyLog = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  it("should print introduce if --help option is not provided", () => {
    const result = helloHelpCli;

    expect(result).not.toBeNull();
  });
});
