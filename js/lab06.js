'use strict';
alert("Hello! I am an alert box!!");

var iDNumber = prompt('please enter your ID number');
var Name = prompt('please enter your full name');
var gender = prompt('please enter your gender');
var age = prompt('please enter your age ');//


var greeting;//undefined
console.log('greeting is ',greeting);

if ( age >= 18 && age <= 99) {
  greeting = 'Welcome to our website';
} else if (age > 12 && age < 18) {
  greeting = 'please have a parent with during using our website!';
} else {
  greeting = 'Sorry! you cannot use our website because you are underaged';
}
console.log('new value greeting is ',greeting);
// true / false
// if(condition){
// }
document.write('<h3>' + greeting + '</h3>');