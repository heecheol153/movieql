const heecheol = {
  name:"Heecheol",
  age: 19,
  gender: "male"
};

const resolvers = {
  Query: {
    person:() => heecheol
  }
};

export default resolvers;