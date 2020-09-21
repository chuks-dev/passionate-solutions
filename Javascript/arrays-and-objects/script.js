const cars = ["accord", "camery", "hilux", "venza"];
// console.log(cars.length);
// console.log(cars[2]);

// if (cars.indexOf("camery") !== -1) {
//   console.log("camery is in stock");
// } else {
//   console.log("camery is sold out");
// }

//!Loops
// for (let x = 0; x <= 10; x = x + 1) {
//   console.log(x);
// }

// !Looping through an array using the for loop
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// !Looping through an array using the forEach loop
// cars.forEach((car) => {
//   console.log(car);
// });
/*
we can get a list from our array by using the index inside a bracket
eg. cars[2]

we can get the index of a list, by using the indexOf method
eg. cars.indexOf('hilux')

*/

//! Objects
// Objects are keys and value pairs
const edison = {
  surname: "Osaghae",
  firstName: "Edison",
  age: 20,
  height: "5'9",
  education: "B.sc",
  hobbies: ["Swimming", "Dancing", "Football", "Singing"],
};

const collins = {
  surname: "Edigie",
  firstName: "Collins",
  age: 29,
  height: "5'2",
  education: "Phd",
  hobbies: ["Social media", "Movies", "Travelling", "Party"],
};

const edwin = {
  surname: "Orhue",
  firstName: "Edwin",
  age: 14,
  height: "5'5",
  education: "SSCE",
  hobbies: ["Coding", "Gaming", "Fighting", "Clubbing"],
};

const users = [edison, collins, edwin];
let userAges = [];

users.forEach((user) => {
  userAges.push(user.age);
});

console.log(userAges);
const sumAge = userAges.reduce((total, current) => {
  return total + current;
});
const averageAge = sumAge / userAges.length;
console.log(averageAge);

// Array Mutation
let fruits = ["Mango", "Apple", "Orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach((fruit)=>{``

// console.log(fruit)
// })

/**
 * Push - adds an item to the end of our array
 * pop - removes an item from the end of our array
 * shift - removes an item from the beginning of our array
 * unshift - adds an item to the beginning of our array
 */

fruits.push("Pineapple");
fruits.push("Grape");
fruits.pop();
fruits.shift();
fruits.unshift("Grape");

// console.log(fruits);
