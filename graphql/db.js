export const people = [
  {
    id: 1,
    name: "Kyungseok",
    age: 31,
    gender: "male",
  },
  {
    id: 2,
    name: "Suyeon",
    age: 32,
    gender: "female",
  },
  {
    id: 3,
    name: "Joanne",
    age: 24,
    gender: "female",
  },
];

export const getById = (id) => people.find((person) => person.id === id);
