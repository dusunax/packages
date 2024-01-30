import { Person } from "../abstract/person.interface";
import femaleNamesRaw from "./female.json";
import maleNamesRaw from "./male.json";

const femaleNames = femaleNamesRaw as Person[];
const maleNames = maleNamesRaw as Person[];

export { femaleNames, maleNames };
