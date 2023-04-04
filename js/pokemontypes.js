"use strict"

function showPokemonTypeImg(types, result) {
    checkPokemonTypeGrass(types, result);
    checkPokemonTypeNormal(types, result);
    checkPokemonTypeFire(types, result);
    checkPokemonTypeWater(types, result);
    checkPokemonTypeElectric(types, result);
    checkPokemonTypeIce(types, result);
    checkPokemonTypeFighting(types, result);
    checkPokemonTypePoisen(types, result);
    checkPokemonTypeGround(types, result);
    checkPokemonTypeFlying(types, result);
    checkPokemonTypePsychic(types, result);
    checkPokemonTypeBug(types, result);
    checkPokemonTypeRock(types, result);
    checkPokemonTypeGhoast(types, result);
    checkPokemonTypeDragon(types, result);
    checkPokemonTypeDark(types, result);
    checkPokemonTypeSteel(types, result);
    checkPokemonTypeFairy(types, result);
}



function checkPokemonTypeGrass(types, result) {
    if (types['type']['name'] == 'grass') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-grass.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeNormal(types, result) {
    if (types['type']['name'] == 'normal') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-earth.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeFire(types, result) {
    if (types['type']['name'] == 'fire') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-fire.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeWater(types, result) {
    if (types['type']['name'] == 'water') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-water.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeElectric(types, result) {
    if (types['type']['name'] == 'electric') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-electric.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeIce(types, result) {
    if (types['type']['name'] == 'ice') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-ice.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeFighting(types, result) {
    if (types['type']['name'] == 'fighting') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-hand.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypePoisen(types, result) {
    if (types['type']['name'] == 'poison') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-poison.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeGround(types, result) {
    if (types['type']['name'] == 'ground') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-earth.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeFlying(types, result) {
    if (types['type']['name'] == 'flying') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-wind.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypePsychic(types, result) {
    if (types['type']['name'] == 'psychic') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-psy.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeBug(types, result) {
    if (types['type']['name'] == 'bug') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-grid.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeRock(types, result) {
    if (types['type']['name'] == 'rock') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-rock.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeGhoast(types, result) {
    if (types['type']['name'] == 'ghoast') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-ghoast.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeDragon(types, result) {
    if (types['type']['name'] == 'dragon') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-typ.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeDark(types, result) {
    if (types['type']['name'] == 'dark') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-dark.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeSteel(types, result) {
    if (types['type']['name'] == 'steel') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-spring.png">${types['type']['name']}</div>
                `;
    }
}

function checkPokemonTypeFairy(types, result) {
    if (types['type']['name'] == 'fairy') {
        //        document.getElementById(`${result['name']}`).classList.add(types['type']['name']);
        document.getElementById('TypesFrom' + result['name']).innerHTML += /*html*/ `
                <div class="pokemonType"><img src="../img/elemente/element-magic.png">${types['type']['name']}</div>
                `;
    }
}