import { Person } from "../abstract/person.interface";
import { femaleNames, maleNames } from "../data";

function _getRandomName(names: Person[]): Person {
  const rand = Math.floor(Math.random() * names.length);

  return names[rand];
}

export function getName(gender?: "male" | "female"): Person {
  if (gender) {
    return gender === "female"
      ? _getRandomName(femaleNames)
      : _getRandomName(maleNames);
  }

  return _getRandomName([...femaleNames, ...maleNames]);
}

export function getAllNames(gender?: "male" | "female"): Person[] {
  return gender === "female" ? femaleNames : maleNames;
}

export default { getName, getAllNames };
