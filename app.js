
// Class ES15

class Student {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let julien = new Student("Julien", "Rioux");

console.log(julien);


// Instance Methods

class Employee {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayHello(){
		return `Hello ${this.firstName} ${this.lastName}!`;
	}
}

let john = new Employee ("John", "Doe");

console.log(john.sayHello());


// Class Methods

class Player {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayWelcome(){
		return `Welcome ${this.firstName} ${this.lastName}!`;
	}
	static isPlayer(obj){
		return obj.constructor === Player;
	}
}

let player1 = new Player ("James", "Bond");

console.log(Player.isPlayer(player1));


// Recap

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

class Person{
	constructor(firstName, lastName, favoriteColor, favoriteNumber){
		this.firstName = firstName;
		this.lastName = lastName;
		this.favoriteColor = favoriteColor;
		this.favoriteNumber = favoriteNumber;
	}
	multiplyFavoriteNumber(n){
		return this.favoriteNumber * n;
	}
}


/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

var person = new Person("Julien", "Rioux", "blue", 34)
console.log(person.multiplyFavoriteNumber(10)) // 340
