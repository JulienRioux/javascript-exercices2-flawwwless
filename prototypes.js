// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.family = [];
}

Person.prototype.fullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.


// 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object constructed from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


const hasNoDuplicate = function(array) {
    return array.some(function(value) {
       return array.indexOf(value) === array.lastIndexOf(value);
    });
}

Person.prototype.addToFamily = function(newMember){
	if(newMember instanceof Person && this.family.indexOf(newMember) === -1){
		this.family.push(newMember);
	}
	return this.family.length;
}

const julien = new Person("Julien", "Rioux", "blue", 98);
// console.log(julien);

const julia = new Person("Julia", "Ouellet", "green", 7);

console.log(julien.addToFamily(julia));
console.log(julien.addToFamily(77));
// console.log(julien);



// PART II

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array.

Array.prototype.letsMap = function(callback){
	const newArr = [];
	this.forEach(x => newArr.push(callback(x)));
	return newArr;
}

let arr = [1,2,3,40];
arr = arr.letsMap((x)=> x*2);
console.log(arr)


// 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

String.prototype.letsReverse = function(){
	return this.split("").reverse().join("");
}

console.log("test".letsReverse());
