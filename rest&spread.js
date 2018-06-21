// ================
//   Object Rest
// ================

const person = {
	first: "Julien",
	last: "Rioux",
	job: "Entrepreneur",
	age: 26
}

const {first, last, ...data} = person;

console.log(first);
console.log(last);
console.log(data);

// Julien
// Rioux
// { job: 'Entrepreneur', age: 26 }


// =================
//  Object Spread 1
// =================

const dog1 = {
	name: "Yogi",
	age: 2,
	bark: ()=>console.log("Wooff!")
}

const dog2 = {...dog1, name:"snowball", age: 10}


console.log(dog1);
console.log(dog2);

dog2.bark()


// =================
//  Object Spread 2
// =================

const defaults = {
	job: "programmer",
	favoriteSerie: "Sillicone Valley",
	ownCat: true
}

const julien = {...defaults, job: "entrepreur"};

const dave =  {...defaults, favoriteSerie: "Game of Thrones"};

console.log(julien);
console.log(dave);
