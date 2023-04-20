"use strict";

let myPokemonArray = [];
let mySinglePokemon;
let loadMorePokemons = 20;
let minCountOfPokemons = 1;
let maxCountentOfPokemons = 5;

let pokedexHTML = document.getElementById("pokedex");

async function init() {
	await loadPokedex();
}

async function loadPokedex() {
	for (let index = minCountOfPokemons; index < maxCountentOfPokemons; index++) {
		// wieviele Pokemons geladen werden sollen
		let url = `https://pokeapi.co/api/v2/pokemon/${index}/`;
		let responseAPI = await fetch(url);
		let responseApiAsJson = await responseAPI.json();
		myPokemonArray.push(responseApiAsJson);
	}
	renderContent();
}

function renderContent() {
	renderLoadingButten();
	closePokemonCart();
	renderPokemonCarts();
	hideLoadingScreen();
}

function renderPokemonCarts() {
	pokedexHTML.innerHTML = ``;
	for (let i = 0; i < myPokemonArray.length; i++) {
		const currentPokemon = myPokemonArray[i];
		pokedexHTML.innerHTML += pokemonCartHTML(currentPokemon);
		renderPokemonTypes(currentPokemon);
	}
}

function renderPokemonTypes(currentPokemon) {
	let pokeTypes = currentPokemon["types"];
	document.getElementById("TypesFrom" + currentPokemon["name"]).innerHTML = ``;
	for (let i = 0; i < pokeTypes.length; i++) {
		const type = pokeTypes[i];
		showPokemonTypeImg(type, currentPokemon);
	}
}

function leftFillNum(num, targetLength) {
	return num.toString().padStart(targetLength, 0);
}

function hideElement(id) {
	document.getElementById(id).classList.add("d-none");
}

function showElement(id) {
	document.getElementById(id).classList.remove("d-none");
}
