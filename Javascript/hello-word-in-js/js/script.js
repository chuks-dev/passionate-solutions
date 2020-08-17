// Variable - Used to store data
// Types of Data
/*
Numbers = 1, 2, 3 ...
Strings = "A", "B", "C", "D" "hello" "fkadkl9893"...
Booleans = true and false


--
Arrays = [1,2,3,4,5], ["A", "B", "C"]. [true, false, false, true]
Objects ={name:"Kelvin", age: 43, isTall: true}
*/

// var x = 20;
// var y = 3;
// var age = x + y;
// var firstName = "Kelvin";
// var lastName = "Edison";
// var numbs = [1,2,3,4,5,6];
// var isTall = false;

// var profile = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     isTall: isTall,
//     country: "Nigeria",
//     state: "Edo",
//     certification: ["Bsc", "ND", "SSCE"]
// }

// var heading = document.getElementById('heading');
// // console.log(heading);
// console.log(heading.textContent);
// console.log(profile.firstName);
// console.log(isTall);

// console.log("Hi! My name  is " + firstName + " And I am " + age + "  Years old");

// var heading = document.getElementById('heading');
// console.log(heading);

// var input = document.getElementById('firstName');
// console.log(input);

// var btn = document.getElementsByClassName('btn');
// console.log(btn);



var heading = document.querySelector('h1');
console.log(heading);



var firstName = document.querySelector('#firstName');
console.log(firstName);

var btn = document.querySelector('.btn');
console.log(btn);

btn.addEventListener('click', function(){
  console.log(firstName.value);
})






