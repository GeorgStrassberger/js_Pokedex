"use strict";

let myPokemonArray = [];
let mySinglePokemon;
let loadMorePokemons = 20;
let minCountOfPokemons = 1;
let maxCountentOfPokemons = 31;



async function init() {
    await loadPokedex();
}

async function loadPokedex() {
    for (let index = minCountOfPokemons; index < maxCountentOfPokemons; index++) { // wieviele Pokemons geladen werden sollen
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
    document.getElementById('pokedex').innerHTML = ``;
    for (let i = 0; i < myPokemonArray.length; i++) {
        const currentPokemon = myPokemonArray[i];
        document.getElementById('pokedex').innerHTML += pokemonCartHTML(currentPokemon);
        renderPokemonTypes(currentPokemon);
    }
}



function pokemonCartHTML(currentPokemon) {
    return `
    <div id="${currentPokemon['name']}" class="pokemon-cart ${currentPokemon['types'][0]['type']['name']}" onclick="openPokemonCart(${currentPokemon['id']-1})">
        <div class="cartHeader">
            <div class="cardnr">#${leftFillNum(currentPokemon.id, 3)}</div>
            <div class="cardname">${currentPokemon['name']}</div>
        </div>
        <div id="TypesFrom${currentPokemon['name']}" class="pokemonTypes">
            <span class="pokemonType">${currentPokemon['types'][0]['type']['name']}</span>
        </div>
        <img class="pokemonImage" src="${currentPokemon['sprites']['front_shiny']}" alt="PokemonImage">
    </div>
    `;
}

function renderPokemonTypes(currentPokemon) {
    let pokeTypes = currentPokemon['types'];
    document.getElementById('TypesFrom' + currentPokemon['name']).innerHTML = ``;
    for (let i = 0; i < pokeTypes.length; i++) {
        const type = pokeTypes[i];
        showPokemonTypeImg(type, currentPokemon);
    }
}


function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}


function renderSinglePokemonCart(i) {
    document.getElementById('mainframe').innerHTML = ``;
    document.getElementById('mainframe').innerHTML = `
    <div id="cartframe" class="cartframe">
        <div class="cartheader">
            <div class="cartbtn">
                <img src="../img/icons/arrow-121-24.png" alt="arrowback" onclick="closePokemonCart()">
                <img id="like_${myPokemonArray[i]['name']}" src="../img/icons/favorite-3-24.png" alt="heart" onclick="like(${i})">
            </div>
            <div class="one">
                <div class="two">
                    <span id="pokeName" class="pokeName capitalize">['name']</span>
                    <div id="three" class="three">
                        <span class="pokeTyp">Type1</span>
                        <span class="pokeTyp">Type2</span>
                    </div>
                </div>
                <div class="pokeID">
                    <span id="pokeID">#001</span>
                </div>
            </div>
            <div class="pokeImges">
                <img class="pokeImgBG" src="../img/pokemonball-draw.png" alt="pokeball"        >
                <img id="pokeImg" class="pokeImg" src="../img/pokemon-1536848_640.png" alt="PokeImage">
            </div>
        </div>
                            <!--der Weiße bereich-->
        <div class="statsframe">
            <div class="statsContainer">
                <div class="linkframe">
                    <span id="about" onclick="showAbout()">About</span>
                    <span id="baseStat" onclick="showBaseStas()">Base Stats</span>
                </div>
                <div class="tableContainer">
                    <table id="tableAbout" class="tableAbout d-none">
                        <tr>
                            <td>Species</td>
                            <td>Seed</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>0.70 cm</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>6.9kg</td>
                        </tr>
                        <tr>
                            <td>Abilities</td>
                            <td>Overgrow</td>
                        </tr>
                    </table>
                    <table id="tableBaseStats" class="tableBaseStats">
                        <tr>
                            <td>HP</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Sp. Atk</td>
                            <td>65</td>
                        </tr>
                        <tr>
                            <td>Sp. Def</td>
                            <td>65</td>
                        </tr>
                        <tr>
                            <td>Speep</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>317</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>       
    `;
}