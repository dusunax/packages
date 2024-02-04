import { HelloHelp } from "../abstract/help.printer";
import { helloHelpCli } from "./cli";

describe("cli", () => {
  let spyLog: jest.SpyInstance;
  const helloHelpInterface = new HelloHelp("test");

  beforeEach(() => {
    spyLog = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  it("should print introduce if --help option is not provided", () => {
    const result = helloHelpCli(helloHelpInterface);

    expect(result).not.toBeNull();
  });
});
