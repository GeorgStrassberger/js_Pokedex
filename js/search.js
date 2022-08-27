document.addEventListener('keyup', searchPokemon);


function searchPokemon() {
    let search = document.getElementById('search');
    let searchValue = search.value.toLowerCase();
    console.log('searchValue: ', searchValue);
    renderSearchedContent(searchValue);
}


function renderSearchedContent(searchValue) {
    document.getElementById('pokedex').innerHTML = ``;
    for (let i = 0; i < myPokemonArray.length; i++) {
        const pokemon = myPokemonArray[i];
        if (pokemon['name'].toLowerCase().includes(searchValue)) {
            document.getElementById('pokedex').innerHTML += pokemonCartHTML(pokemon);
        }
    }
}