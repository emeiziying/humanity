export namespace Person {
  enum Sex {
    Male = 0,
    Female = 1,
  }

  type Parents = {
    father: Person;
    mother: Person;
  };

  type PersonData = {
    id: number;
    name: string;
    age: number;
    sex: Sex;
    parents: Parents;
    package: [];
  };
}
