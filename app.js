
var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}];


// find
console.log(instructors.find(val => val.name === "Tim"));


// findIndex
console.log(instructors.findIndex(val => val.name === "Tim"));


// Includes
console.log("awesome".includes("some"));


// isFinite
function seeIfNumber(val){
	if(Number.isFinite(val)){
		return "It is a number!";
	}
	return "It's not a number!"
}

console.log(seeIfNumber("Hello"));
console.log(seeIfNumber(1));



/*
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

*/

function copyObject(obj){
	let copy = Object.assign({}, obj);
	return copy;
}

console.log("*********");
var o = {name: 'Elie'}
var o2 = copyObject(o)
o2.name = "Tim";
console.log(o2.name) // 'Tim'
console.log(o.name) // 'Elie'

/*

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

*/

function checkIfFinite(n){
	return Number.isFinite(n);
}

console.log("*********");
console.log(checkIfFinite(4)) // true
console.log(checkIfFinite(-3)) // true
console.log(checkIfFinite(4.)) // .toEqual(true
console.log(checkIfFinite(NaN)) // false
console.log(checkIfFinite(Infinity)) // false

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
areAllNumbersFinite(finiteNums) // true
areAllNumbersFinite(finiteNumsExceptOne) // false
*/

function areAllNumbersFinite(arr){
	// return arr.findIndex(x => !Number.isFinite(x)) === -1;
	return arr.every(Number.isFinite)
}

console.log("**********");
var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
console.log(areAllNumbersFinite(finiteNums)) // true
console.log(areAllNumbersFinite(finiteNumsExceptOne)) // false

/*

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/

function convertArrayLikeObject(obj){
	return Array.from(obj);
}

/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []
*/

function displayEvenArguments(...args){
	return args.filter(x => x % 2 === 0)
}

console.log(displayEvenArguments(1,2,3,4,5,6)); // [2,4,6]
console.log(displayEvenArguments(7,8,9)); // [8]
console.log(displayEvenArguments(1,3,7)); // []
