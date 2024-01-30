import { getName, getAllNames } from "./name";

describe("Random Name Generator", () => {
  it("💃 should return a random female name", () => {
    const femaleName = getName("female");
    expect(femaleName.gender).toBe("female");
  });

  it("🕺 should return a random male name", () => {
    const maleName = getName("male");
    expect(maleName.gender).toBe("male");
  });

  it("🧚 should return a random name without gender specified", () => {
    const randomName = getName();
    expect(randomName.gender).toMatch(/female|male/);
  });

  it("👯‍♀️ should return all female names", () => {
    const allFemaleNames = getAllNames("female");
    expect(allFemaleNames.every((name) => name.gender === "female")).toBe(true);
  });

  it("👯‍♂️ should return all male names", () => {
    const allMaleNames = getAllNames("male");
    expect(allMaleNames.every((name) => name.gender === "male")).toBe(true);
  });
});
