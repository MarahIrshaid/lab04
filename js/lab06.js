'use strict';
var iDNumber = prompt('please enter your ID number');
var Name = prompt('please enter your full name');
var gender = prompt('please enter your gender');
var age = prompt('please enter your age ');//

function greet(){


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
return greeting ;git
}
greet();


function userOrder() {
  var userWant = prompt('whats the name of the drug you want ?');
 
  while (userWant !== 'panadol' && userWant !== 'revanin') {
    
    userWant = prompt('whats the name of the drug you want ?');
  }
  var orderNumbers = prompt('how many items do you want to order?');
 
  for (var i = 0; i < orderNumbers; i++) {
    if (userWant === 'panadol') {
      //code
      document.write('<img id="block" src="https://i-cf3.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/en_ae/Products/Panadol%20Advance%20455x455.jpg?auto=format">');
    } else if (userWant === 'revanin') {
      //code
      document.write('<p><img src="https://www.almrsal.com/wp-content/uploads/2017/10/%D8%B1%D9%8A%D9%81%D8%A7%D9%86%D9%8A%D9%86-Revanin-768x768.jpg"></p>');
    }
  }
}
userOrder();



