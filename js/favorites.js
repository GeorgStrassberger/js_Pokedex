"use strict";
let favoritePokemonsIdOnly = [];
let favoritePokemons = [];

function checkPokemonInArray(i) {
	if (favoritePokemonsIdOnly.includes(myPokemonArray[i].id)) {
		document.getElementById(`like_${myPokemonArray[i]["name"]}`).src =
			"../img/icons/heart-69-24.png";
	} else {
		document.getElementById(`like_${myPokemonArray[i]["name"]}`).src =
			"../img/icons/favorite-3-24.png";
	}
}

function like(i) {
	if (!favoritePokemonsIdOnly.includes(myPokemonArray[i].id)) {
		pushToFavorites(i);
	} else {
		deleteFromFavorites(i);
	}
	playClickSound(i);
}

function pushToFavorites(i) {
	favoritePokemons.push(myPokemonArray[i]);
	favoritePokemonsIdOnly.push(myPokemonArray[i].id);
	document.getElementById(`like_${myPokemonArray[i]["name"]}`).src =
		"../img/icons/heart-69-24.png";
}

function deleteFromFavorites(i) {
	favoritePokemons.splice(favoritePokemons.indexOf(myPokemonArray[i]), 1);
	favoritePokemonsIdOnly.splice(
		favoritePokemonsIdOnly.indexOf(myPokemonArray[i].id),
		1
	);
	document.getElementById(`like_${myPokemonArray[i]["name"]}`).src =
		"../img/icons/favorite-3-24.png";
}

function renderFavorietesPokemons() {
	document.getElementById("pokedex").innerHTML = ``;
	for (let i = 0; i < favoritePokemons.length; i++) {
		const currentPokemon = favoritePokemons[i];
		document.getElementById("pokedex").innerHTML +=
			pokemonCartHTML(currentPokemon);
		renderPokemonTypes(currentPokemon);
	}
}
