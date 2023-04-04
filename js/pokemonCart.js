"use strict"

function openPokemonCart(i) {
    document.getElementById('body').classList.add('backgroundCard');
    renderSinglePokemonCart(i);
    document.getElementById('pokedex').classList.add('d-none');
    document.getElementById('mainframe').classList.remove('d-none');
    document.title = `${myPokemonArray[i]['name']}`;
    document.getElementById('about').style.color = 'grey';
    renderSinglePokemonCartInfo(i);
}

function closePokemonCart() {
    document.getElementById('body').classList.remove('backgroundCard');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('mainframe').classList.add('d-none');
    document.title = `Pokedex`;
}

function renderSinglePokemonCartInfo(i) {
    document.getElementById('cartframe').style.backgroundColor = `var(--${myPokemonArray[i]['types'][0]['type']['name']}-type)`;
    document.getElementById('pokeName').innerHTML = `${myPokemonArray[i]['name']}`;
    document.getElementById('pokeID').innerHTML = `#${leftFillNum(myPokemonArray[i].id, 3)}`;
    document.getElementById('pokeImg').src = `${myPokemonArray[i]['sprites']['other']['home']['front_default']}`;
    checkPokemonInArray(i);
    renderSinglePokemonCartInfoTableAbout(i);
    renderSinglePokemonCartInfoTableBaseStats(i);
    renderSingelPokemonCartTypes(i);
}

function renderSingelPokemonCartTypes(i) {
    document.getElementById('three').innerHTML = ``;
    for (let j = 0; j < myPokemonArray[i]['types'].length; j++) {
        const singelCartType = myPokemonArray[i]['types'][j];
        console.log('newtype: ', singelCartType['type']['name']);
        document.getElementById('three').innerHTML += /*html*/ `
            <span class="pokeTyp capitalize ${singelCartType['type']['name']}">${singelCartType['type']['name']}</span>
        `;
    }
}


function renderSinglePokemonCartInfoTableAbout(i) {
    document.getElementById('tableAbout').innerHTML = /*html*/ `
                    <tr>
                        <td>Species</td>
                        <td>Noch in Arbeit</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>${myPokemonArray[i]['height']}0 cm</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>${myPokemonArray[i]['weight']} kg</td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td class="capitalize">${myPokemonArray[i]['abilities'][0]['ability']['name']}</td> 
                    </tr>
                `;
}

function renderSinglePokemonCartInfoTableBaseStats(i) {
    document.getElementById('tableBaseStats').innerHTML = /*html*/ `
                <tr class="uppercase">
                    <td>${myPokemonArray[i]['stats'][0]['stat']['name']}</td>
                    <td>${myPokemonArray[i]['stats'][0]['base_stat']}</td>
                </tr>
                <tr class="capitalize">
                    <td>${myPokemonArray[i]['stats'][1]['stat']['name']}</td>
                    <td>${myPokemonArray[i]['stats'][1]['base_stat']}</td>
                </tr>
                <tr class="capitalize">
                    <td>${myPokemonArray[i]['stats'][2]['stat']['name']}</td>
                    <td>${myPokemonArray[i]['stats'][2]['base_stat']}</td>
                </tr>
                <tr class="capitalize">
                    <td>${myPokemonArray[i]['stats'][3]['stat']['name']}</td>
                    <td>${myPokemonArray[i]['stats'][3]['base_stat']}</td>
                </tr>
                <tr class="capitalize">
                    <td>${myPokemonArray[i]['stats'][4]['stat']['name']}</td>
                    <td>${myPokemonArray[i]['stats'][4]['base_stat']}</td>
                </tr>
                <tr class="capitalize">
                    <td>${myPokemonArray[i]['stats'][5]['stat']['name']}</td>
                    <td>${myPokemonArray[i]['stats'][5]['base_stat']}</td>
                </tr>
                `;
}

function showAbout() {
    document.getElementById('about').style.fontWeight = 'bolder'; // show witch Tab is Active
    document.getElementById('about').style.color = 'black';
    document.getElementById('baseStat').style.color = 'grey';
    document.getElementById('baseStat').style.fontWeight = 'normal';
    document.getElementById('tableBaseStats').classList.add('d-none');
    document.getElementById('tableAbout').classList.remove('d-none');
}

function showBaseStas() {
    document.getElementById('baseStat').style.fontWeight = 'bolder'; // show witch Tab is Active
    document.getElementById('baseStat').style.color = 'black';
    document.getElementById('about').style.fontWeight = 'normal';
    document.getElementById('about').style.color = 'grey';
    document.getElementById('tableAbout').classList.add('d-none');
    document.getElementById('tableBaseStats').classList.remove('d-none');
}