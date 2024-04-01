import fs from "fs";
import path from "path";
import {
  createMarkdownFile,
  getCurrentDateString,
  fillMarkdownVariables,
  readConfigJSON,
} from "../index";

jest.mock("fs");

const USERNAME = "min-hee";
const DATE_STRING = "2024-04-01";
const CONFIG = { username: USERNAME, title: "🏈", dateString: DATE_STRING };
const USER_DIR = path.join(process.cwd(), "docs", USERNAME);
const TEMPLATE = "{{title}} {{username}}";

describe("Markdown File Creation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Create Markdown File", () => {
    jest.spyOn(fs, "readFileSync").mockReturnValue(TEMPLATE);
    jest.spyOn(fs, "existsSync").mockReturnValue(false);
    jest.spyOn(fs, "writeFileSync").mockImplementation(() => {});
    const consoleLogSpy = jest.spyOn(console, "log");

    createMarkdownFile(TEMPLATE, CONFIG);

    expect(consoleLogSpy.mock.calls[0][0]).toContain("Created");
  });

  test("Create Markdown File - File Already Exists", () => {
    jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const consoleErrorSpy = jest.spyOn(console, "error");

    createMarkdownFile(TEMPLATE, CONFIG);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy.mock.calls[0][0]).toContain("already exists");
  });

  test("Read Configuration from JSON File", () => {
    jest.spyOn(fs, "readFileSync").mockReturnValue(JSON.stringify(CONFIG));

    const config = readConfigJSON();

    expect(config).toEqual(CONFIG);
  });

  test("Fill Markdown Variables", () => {
    expect(fillMarkdownVariables(USER_DIR, CONFIG)).toEqual(
      JSON.stringify({
        username: USERNAME,
        title: CONFIG.title,
        dateString: DATE_STRING,
      })
    );
  });

  test("Get Current Date String", () => {
    const mockDate = new Date("2024-04-01T12:00:00Z");
    const spy = jest
      .spyOn(global, "Date")
      .mockImplementation(() => mockDate as unknown as Date);

    const currentDate = getCurrentDateString();

    expect(currentDate).toEqual("2024-04-01");
    spy.mockRestore();
  });
});
