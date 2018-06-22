
// Inheritance

class Person {
	constructor(first, last){
		this.first = first;
		this.last = last
	}
	sayHello(){
		return `Hello ${this.first} ${this.last}!`
	}
}

class Student extends Person{

}

let jack = new Student("Jack", "Sparrow")

console.log(jack.sayHello());



// Super

class Employee {
	constructor(first, last){
		this.first = first;
		this.last = last
	}
	sayHello(){
		return `Hello ${this.first} ${this.last}!`
	}
}

class Programmer extends Employee{
	constructor(firstName, lastName){
		super(firstName, lastName)
		this.geek = true;
	}
}

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

class Vehicule {
	constructor(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
	whatIsIt(){
		return `This is a ${this.make} ${this.model} ${this.year}!`;
	}
	vroom(){
		return "Vroom"
	}
}

const suzuki = new Vehicule("Suzuki", "Gs1000", 1982);


// 2 - Add an instance method called start which returns the string "VROOM!"

console.log(suzuki.vroom());

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

console.log(suzuki.whatIsIt());

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

class Car extends Vehicule{
	constructor(){
		super(...arguments);
		this.numWheels = 4;
	}
}

const honda = new Car("Honda", "Civic", 2009);

console.log(honda.whatIsIt());


// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

class Motorcycle extends Vehicule{
	constructor(){
		super(...arguments)
		this.numWheels = 2;
	}
}

const z50 = new Motorcycle("Honda", "z50", 1972)

console.log(z50);
