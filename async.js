// Async Functions Assignment
// 1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a string which displays the username who has the most followers.
//
// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

async function hasMostFollowers(){

	const url = "https://api.github.com/users/";
	let mostFollowers;

	let urls = [...arguments].map(username => $.getJSON(`${url}${username}`),)

	var userList = await Promise.all(urls)

	userList.forEach((user, index)=>{
		if(index === 0){
			mostFollowers = {
				userName: user.name,
				followers: user.followers
			}
		} else if (user.followers > mostFollowers.followers){
			mostFollowers = {
				userName: user.name,
				followers: user.followers
			}
		}
	})

	return mostFollowers;
}



// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

// starWarsString(1).then(function(data){
//     console.log(data)
// })

async function starWarsString(num){
	const character = await $.getJSON(`https://swapi.co/api/people/${num}`);
	return character.name
}

// "Luke Skywalker"
// Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in



async function starWarsString2(num){
	const data = await $.getJSON(`https://swapi.co/api/people/${num}`);
	const name = data.name;
	const films = data.films.map(film => Number(film.split("/").slice(-2, -1).join("")));
	const firstFilm = await $.getJSON(`https://swapi.co/api/films/${Math.min(...films)}`);
	return `${name} is featured in ${firstFilm.title}, directed by ${firstFilm.director}`
}

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
// Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet.


async function starWarsString3(num){
	const data = await $.getJSON(`https://swapi.co/api/people/${num}`);
	const films = data.films.map(film => Number(film.split("/").slice(-2, -1).join("")));
	const firstFilm = await $.getJSON(`https://swapi.co/api/films/${Math.min(...films)}`);
	const firstPlanet = await $.getJSON(firstFilm.planets[0]);
	return `The first planet in ${firstFilm.title} is ${firstPlanet.name}`
}



// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner


// Print it this order to get sure to get all the logs in the good order!
async function logInOrder(){
	await hasMostFollowers('elie','tigarcia','colt').then(function(data){
	    console.log(data)
	});

	await starWarsString(1).then(function(data){
	    console.log(data)
	})

	await starWarsString2(1).then(function(data){
	    console.log(data)
	})

	await starWarsString3(1).then(function(data){
	    console.log(data)
	})
}

logInOrder();
