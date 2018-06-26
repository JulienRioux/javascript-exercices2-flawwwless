// Generator

function* pauseAndReturnValues(num){
	for(let i = 0; i < num; i++){
		yield i;
	}
}


let gen = pauseAndReturnValues(4);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


function* printValues(){
	yield "First";
	yield "Second";
	yield "Third";
}

let g = printValues();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);



function* pauseAndReturnValues2(num){
	for(let i = 0; i < num; i++){
		yield i;
	}
}


for(val of pauseAndReturnValues2(5)){
	console.log(val);
}

function* getMovieData(movieName){
	console.log("Starting");
	yield $.getJSON(`http://www.omdbapi.com/?t=${movieName}&apikey=thewdb`);
	console.log("Ending");
}

var movieGetter = getMovieData("titanic");
movieGetter.next().value.then(val => console.log(val));
