


/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

const tripleAndFilter = arr => arr.map(x => x * 2).filter(x => x % 5 === 0);

const arr1 = [5, 10, 12, 20];

console.log("1)", tripleAndFilter(arr1));


/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

const doubleOddNumbers = (arr)=> arr.filter(x => x%2 === 0).map(x => x*2);

const arr2 = [5, 10, 12, 20];

console.log("2)", doubleOddNumbers(arr2));

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

const mapFilterAndReduce = (arr)=> arr.map(x => x.firstName).filter(x => x.length < 5).reduce((acc, next)=>{
	acc[next] = next.length;
	return acc;
}, {})


function Person(firstName, age){
	this.firstName = firstName;
	this.age = age;
}

const julien = new Person("julien", 25);
const julia = new Person("julia", 25);
const yeti = new Person("yeti", 5);
const ttt = new Person("ttt", 333);


const testArr = [julien, julia, yeti, ttt];

console.log("3)", mapFilterAndReduce(testArr));

/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Jack', 'Sparrow') // {firstName: 'Jack', lastName: 'Sparrow'}
*/

const createStudentObj = (firstName, lastName)=> {
	return {
		firstName: firstName,
		lastName: lastName
	}
}

const jack = createStudentObj('Jack', 'Sparrow')

console.log("4)", jack);



/* 5 - Given the following code:


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Steve'

    var instructor = {
      firstName: "Steve",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

const instructor = {
	firstName: "Steve",
	sayHi: function(){
		setTimeout(()=>{
			console.log(`Hello ${this.firstName}`);
		}, 1000)
	}
}

console.log("5)");
instructor.sayHi();
