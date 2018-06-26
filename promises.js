function displayAtRandomTime(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			if(Math.random() > .5){
				resolve("Yes!");
			} else {
				reject("No!")
			}
		}, 1000);
	});
}


displayAtRandomTime().then((res)=> console.log(res))

function waitForHello(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=> resolve("Hello"), 1000)
	})
}

waitForHello().then((res)=> console.log(`${res} World!`))


let years = [];

$.getJSON("http://www.omdbapi.com/?t=titanic&apikey=thewdb")
.then(function(movie){
	years.push(movie.Year);
	return $.getJSON("http://www.omdbapi.com/?t=shrek&apikey=thewdb")
})
.then(function(movie){
	years.push(movie.Year);
	console.log(years);
	console.log("ALL DONE!")
})

// promise.all

function getMovie(title){
	return $.getJSON(`http://www.omdbapi.com/?t=${title}&apikey=thewdb`)
}

const titanicPromise = getMovie("titanic");
const shrekPromise = getMovie("shrek");
const braveheartPromise = getMovie("braveheart");

Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(movies){
	return movies.forEach(function(value){
		console.log(value.Year);
	})
})
