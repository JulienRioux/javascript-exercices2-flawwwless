

function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.sayHi = function(){
	return `Hello ${this.firstName} ${this.lastName}`
}

function Student(firstName, lastName){
	return Person.apply(this, arguments);
}

// 1) Set the prototype to a new created Object
Student.prototype = Object.create(Person.prototype);
// 2) Re-Set the constructor proprety
Student.prototype.constructor = Student;

Student.prototype.status = function(){
	return "Is a student";
}


const julien = new Student("Julien", "Rioux")
console.log(julien.status());

const yeti = new Person("Yeti", "Rioux");
// console.log(yeti.status());
