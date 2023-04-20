"use strict";

function openPokemonCart(i) {
	document.getElementById("body").classList.add("backgroundCard");
	renderSinglePokemonCart(i);
	document.getElementById("pokedex").classList.add("d-none");
	document.getElementById("mainframe").classList.remove("d-none");
	document.title = `${myPokemonArray[i]["name"]}`;
	document.getElementById("about").style.color = "grey";
	renderSinglePokemonCartInfo(i);

	hideElement("header");
	hideElement("footer");
}

function closePokemonCart() {
	document.getElementById("body").classList.remove("backgroundCard");
	document.getElementById("pokedex").classList.remove("d-none");
	document.getElementById("mainframe").classList.add("d-none");
	document.title = `Pokedex`;

	showElement("header");
	showElement("footer");
}

function renderSinglePokemonCartInfo(i) {
	document.getElementById(
		"pokeName"
	).innerHTML = `${myPokemonArray[i]["name"]}`;
	document.getElementById("pokeID").innerHTML = `#${leftFillNum(
		myPokemonArray[i].id,
		3
	)}`;
	document.getElementById(
		"pokeImg"
	).src = `${myPokemonArray[i]["sprites"]["other"]["home"]["front_default"]}`;
	checkPokemonInArray(i);
	renderSinglePokemonCartInfoTableAbout(i);
	renderSinglePokemonCartInfoTableBaseStats(i);
	renderSingelPokemonCartTypes(i);
}

function renderSingelPokemonCartTypes(i) {
	document.getElementById("pokeTypes").innerHTML = ``;
	for (let j = 0; j < myPokemonArray[i]["types"].length; j++) {
		const singelCartType = myPokemonArray[i]["types"][j];
		document.getElementById("pokeTypes").innerHTML += /*html*/ `
		<span class="card__header-type pokeFontColor ${singelCartType["type"]["name"]}">${singelCartType["type"]["name"]}</span>
        `;
	}
}

function showAbout() {
	document.getElementById("about").style.fontWeight = "bolder"; // show witch Tab is Active
	document.getElementById("about").style.color = "black";
	document.getElementById("baseStat").style.color = "grey";
	document.getElementById("baseStat").style.fontWeight = "normal";
	document.getElementById("tableBaseStats").classList.add("d-none");
	document.getElementById("tableAbout").classList.remove("d-none");
}

function showBaseStas() {
	document.getElementById("baseStat").style.fontWeight = "bolder"; // show witch Tab is Active
	document.getElementById("baseStat").style.color = "black";
	document.getElementById("about").style.fontWeight = "normal";
	document.getElementById("about").style.color = "grey";
	document.getElementById("tableAbout").classList.add("d-none");
	document.getElementById("tableBaseStats").classList.remove("d-none");
}

function nextPokemon(i) {
	if (i === myPokemonArray.length - 1) {
		openPokemonCart(0);
	} else {
		openPokemonCart(i + 1);
	}
}

function previousPokemon(i) {
	if (i === 0) {
		openPokemonCart(myPokemonArray.length - 1);
	} else {
		openPokemonCart(i - 1);
	}
}
