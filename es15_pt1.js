// =========================
// Default parameters

function add(a=10, b=20){
	return a*b;
}

console.log(add());
console.log(add(1));
console.log(add(2,2));

console.log("**********")

// =========================
// For ... of

const arr = [1,2,3,4];

for(let val of arr){
	console.log(val);
}

console.log("**********")

// =========================
// Rest pt.1

function printRest(a,b,...c){
	console.log(a);
	console.log(b);
	console.log(c);
}

printRest(1,2,3,4,5)

console.log("**********")

// =========================
// Rest pt.2

const sumArguments = (...args)=> args.reduce((acc, next)=> acc + next);

console.log(sumArguments(1,2,3,4,5));

console.log("**********")

// =========================
// Spread pt.1

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

const combinedArr = [...arr1, ...arr2, ...arr3];

console.log(combinedArr);

console.log("**********")

// =========================
// Spread pt.2

const anotherArr = [4,2,2,3,7,1];

console.log(Math.max(...anotherArr));

console.log("**********")

// =========================
// Spread pt.3

function sumValues(a,b,c){
	return a+b+c;
}

const nums = [12,15,20];

console.log(sumValues(...nums));
