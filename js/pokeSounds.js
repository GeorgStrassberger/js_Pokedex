"use strict";

let pokemonThema = new Audio("../audio/PokemonTheme.mp3");
let clickSound = new Audio("../audio/Pokemonmenu.mp3");
let playing = true;

pokemonThema.volume = 0.1;
clickSound.volume = 0.1;

function playingAudio() {
	playing = !playing;
	if (!playing) {
		playPokemonThema();
	} else {
		pausePokemonThema();
	}
}

function playPokemonThema() {
	pokemonThema.play();
}

function pausePokemonThema() {
	pokemonThema.pause();
}

function playClickSound() {
	clickSound.play();
}
