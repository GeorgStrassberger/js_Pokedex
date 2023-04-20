"use strict";

const searchField = document.getElementById("search");

searchField.addEventListener("keyup", searchPokemon);
searchField.addEventListener("blur", clearInputField);

function searchPokemon() {
	let searchValue = searchField.value.toLowerCase();
	renderSearchedContent(searchValue);
}

function renderSearchedContent(searchValue) {
	document.getElementById("pokedex").innerHTML = ``;
	for (let i = 0; i < myPokemonArray.length; i++) {
		const pokemon = myPokemonArray[i];
		if (pokemon["name"].toLowerCase().includes(searchValue)) {
			document.getElementById("pokedex").innerHTML += pokemonCartHTML(pokemon);
		}
	}
}

function clearInputField() {
	searchField.value = "";
	renderPokemonCarts();
}
