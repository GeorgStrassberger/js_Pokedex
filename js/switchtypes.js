"use strict"

function showPokemonTypeImg(types, result) {
    switch (true) {
        case (types['type']['name'] == 'grass'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-grass.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'normal'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-hand.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'fire'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-fire.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'water'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-water.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'electric'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-electric.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'ice'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-ice.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'fighting'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-hand.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'poison'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-poison.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'ground'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-earth.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'flying'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-wind.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'psychic'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-psy.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'bug'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-grid.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'rock'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-rock.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'ghoast'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-ghoast.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'dragon'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-typ.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'dark'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-dark.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'steel'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-spring.png">${types['type']['name']}</div>
                `;
            break;
        case (types['type']['name'] == 'fairy'):
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/elemente/element-magic.png">${types['type']['name']}</div>
                `;
            break;
        default:
            document.getElementById('TypesFrom' + result['name']).innerHTML += `
                <div class="pokemonType ${types['type']['name']}"><img src="../img/pokeball.png">${types['type']['name']}</div>
                `;
            break;
    }
}