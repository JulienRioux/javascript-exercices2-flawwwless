
// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

function Vehicule(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

Vehicule.prototype.start = function(){
	return "Vroom!!"
}

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

Vehicule.prototype.toString = function(){
	return `This is a ${this.make} made by ${this.model} in ${this.year}.`;
}

const vehicle = new Vehicule("Tractor", "John Deere", 1999);
console.log(vehicle.toString());

// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

function Car(make, model, year){
	Vehicule.apply(this, arguments);
	this.numWheels = 4;
}

Car.prototype = Object.create(Vehicule.prototype);
Car.prototype.constructor = Car;

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

function Motorcycle(make, model, year){
	Vehicule.apply(this.arguments);
	this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicule.prototype);
Motorcycle.prototype.constructor = Motorcycle;

const cafeRacer = new Motorcycle("Suzuki", "GS1000", 1992);

console.log(cafeRacer.start());
