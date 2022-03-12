const kyungseok = {
  name: "Kyungseok",
  age: 31,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => kyungseok,
  },
};

export default resolvers;
