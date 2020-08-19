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



// var heading = document.querySelector('h1');
// console.log(heading);


var firstName = document.querySelector('#firstName');
console.log(firstName);

var btn = document.querySelector('.btn');
console.log(btn);

btn.addEventListener('click', outputFirstName)


// ! Operators in Javascript
/*
equals to: == (not precise)
equals to: === (precise)
not equals to: != ( not precise)
not equals to: !== (precise)
modulus (remainder) : % 
and operator : &&
or operator : ||
not operator: !
less than : <
greater than : >
less than or equal to: <=
greater than or equal to: >=



sum : +
divide: / 
minus: -
multiply: *



*/


var firstNumber = 70;
var secondNumber = 20;
var thirdNumber = 3;
var fourthNumber = 20;
var fifthNumber = 10;
var sixthNumber = 7;
var stringNumber = "10";
var isValid = false;

// console.log(firstNumber + stringNumber)

// console.log(firstNumber == secondNumber)
// console.log(thirdNumber == firstNumber)
// console.log(firstNumber == stringNumber)
// console.log(firstNumber === thirdNumber)
// console.log(firstNumber !== stringNumber)

// console.log(secondNumber % thirdNumber)

console.log(firstNumber === fifthNumber && secondNumber === fourthNumber);

console.log(firstNumber === sixthNumber || secondNumber === thirdNumber)

console.log(!isValid)
console.log(firstNumber > secondNumber)
console.log(firstNumber < secondNumber)
console.log(firstNumber > fifthNumber)
console.log(firstNumber >= fifthNumber)
console.log(firstNumber <= fifthNumber)


// ! Conditional Statements
// if(firstNumber > fifthNumber){
//   console.log('First Number is greater')
// }else{
//   console.log('Fifth number is greater')
// }




if(firstNumber > fifthNumber){
  console.log('First Number is greater')
}
else if (firstNumber === fifthNumber){
  console.log("The first Number is equal to fifth Number");
}
else{
  console.log('Fifth number is greater than first number')
}


//! Function 
// TYpes of functions
/*
Types of functions 
1. Function expression
2.Function declaration

*/



addNumbers(6,7)
addNumbers(firstNumber,secondNumber)
multiplyNumbers(3,3,3)





function addNumbers(a,b){
  console.log(a+b);
}
function multiplyNumbers(a,b,c){
  console.log(a*b*c);
}
function outputFirstName(){
  console.log(firstName.value)
}