//object

enum Gender {
  MALE = "M",
  FEMALE = "F",
}
type User = {
  name: string;
  age: number;
  gender: Gender;
};

let user: User = {
  name: "riqki",
  age: 21,
  gender: Gender.MALE,
};
