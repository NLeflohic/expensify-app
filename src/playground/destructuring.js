// const person = {
//   // name: "nico",
//   age: 43,
//   location: {
//     city: "Paris" //,
//     // temp: 2
//   }
// };

// const { name = "Anonymous", age } = person;
// const { city, temp: temperature = 666 } = person.location;

// console.log(name, age, city, temperature);

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holyday",
  publisher: {
    //name: "penguin"
  }
};

const { name: publisherName = "Self-publish" } = book.publisher;
console.log(publisherName);

const array = ["rue", "ville", "region", "latitude"];
const [, city = "new york", state] = array;

console.log(city, state);

const item = ["Coffe (hot)", "$2.00", "$2.5", "$2.75"];
const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
