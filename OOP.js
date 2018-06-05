
// ******************************
// *****************************
// ****** This keyword ********
// ***************************
// **************************


// ====================================================================
// General Rules:

// Name of the method   Parameters                   Invoke Immediatly?

// Call                 thisArg, a, b, c, d, ...     Yes
// Apply                thisArg, [a, b, c, d, ...]   Yes
// Bind                 this.arg, a, b, c, d, ...    No
// ====================================================================


// =================
//  1) Using Call
// =================

// Exemple 1

const julien = {
	firstName: "Julien",
	sayHi: function(){
		return `Hi ${this.firstName}!`;
	}
}

const yeti = {
	firstName: "Yeti"
}

console.log(julien.sayHi());
console.log(julien.sayHi.call(yeti));

// Exemple 2

function sayHi(){
	return `Hi ${this.firstName}!`;
}

const julia = {
	firstName: "Julia"
}

const marc = {
	firstName: "Marc"
}

console.log(sayHi.call(julia))
console.log(sayHi.call(marc))


// Exemple 3
// Select all the divs on a page => Use with the chrome console

// const divs = document.getElementsByTagName("div");  // return an array like object
//
// const divsArray = [].slice.call(divs);


// =================
//  2) Using Apply
// =================

// Exemple 1

function sayHello(){
	return `Hello ${this.firstName}!`;
}

const james = {
	firstName: "James"
}

const john = {
	firstName: "John"
}

console.log(sayHello.call(james))
console.log(sayHello.apply(john))
// it seem the same at first as call

// Exemple 2

function addNumbers(a, b, c, d){
	return `${this.firstName} just calculated ${a+b+c+d}`;
}

const jimmi = {
	firstName: "Jimmi"
}

const marty = {
	firstName: "Marty"
}

// the other parameters are NOT in an array
console.log(addNumbers.call(jimmi, 1,2,3,4));
// the other parameters are in an array
console.log(addNumbers.apply(marty, [1,2,3,4]));

// Exemple 3

function sumValues(a,b,c){
	return a+b+c;
}

var values = [10, 3, 7];

console.log(sumValues(values));
// return 10,3,7undefinedundefined =>(a=values, b=undefined, c=undefined)

console.log(sumValues.apply(this, values));
// return 20 =>(a=values[0], b=values[1], c=values[2]) => return now the correct output


// =================
//  3) Using Bind
// =================

// Exemple 1

function multiplyNumbers(a, b){
	return `${this.firstName} just calculated ${a*b}!`;
}

const jenna = {
	firstName: "Jenna"
}

const mike = {
	firstName: "Mike"
}

const jennaMultiply = multiplyNumbers.bind(jenna, 5, 10);
console.log(jennaMultiply());

// You dont need with bind to know all the arguments up front!
const mikeMultiplyItBy2 = multiplyNumbers.bind(mike, 2);
console.log(mikeMultiplyItBy2(5));

// Exemple 2
// Working with asyncronous code

const alexander = {
	firstName: "Alexander",
	sayHi: function(){
		setTimeout(function(){
			console.log(`Hi ${this.firstName}`);
		}.bind(this), 1000)
	}
}

alexander.sayHi();
