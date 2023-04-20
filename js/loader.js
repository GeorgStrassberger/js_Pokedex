"use strict";

function showMorePokemons() {
	showLoadingScreen();
	if (myPokemonArray.length < 152 - loadMorePokemons) {
		minCountOfPokemons = maxCountentOfPokemons;
		maxCountentOfPokemons = maxCountentOfPokemons + loadMorePokemons;
	} else {
		waitTwoSeconds();
		minCountOfPokemons = maxCountentOfPokemons;
		maxCountentOfPokemons = 152;
	}
	if (myPokemonArray.length >= 151) {
		alert("Alle Pokemon's wurden geladen !");
	}
	loadPokedex();
}

function showAllPokemons() {
	if (myPokemonArray.length >= 151) {
		alert("Alle Pokemon's wurden geladen !");
	} else {
		showLoadingScreen();
		minCountOfPokemons = maxCountentOfPokemons;
		maxCountentOfPokemons = 152;
		loadPokedex();
	}
}

function showLoadingScreen() {
	document.getElementById("page-loader").classList.remove("d-none");
}

function hideLoadingScreen() {
	document.getElementById("page-loader").classList.add("d-none");
}
