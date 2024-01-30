export interface Person {
  gender: "male" | "female";
  name: {
    english: string;
    japanese: string;
    korean: string;
  };
}
