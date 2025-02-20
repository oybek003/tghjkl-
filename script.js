    import pokemons from "./pokemons.js";
    const pokemonContainer = document.getElementById("pokemonContainer");
    const searchInput = document.getElementById("searchInput");
    const filterType = document.getElementById("filterType");
    const sortBy = document.getElementById("sortBy");
    const searchButton = document.getElementById("searchButton");

    function generator(pokemon){
        pokemonContainer.innerHTML = '';
        pokemon.forEach(pokemon => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${pokemon.name}</h3>
                <img src="${pokemon.img}" alt="">
                <p>${pokemon.type}</p>
                <p>${pokemon.weight}</p>
            `;

            pokemonContainer.appendChild(card)
        });
    }

    function filter() {
        const filteredPokemons = pokemons;

        if (sortBy.value === "alphabeticalAsc") {
            filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy.value === "alphabeticalDesc") {
            filteredPokemons.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy.value === "weightAsc") {
            filteredPokemons.sort((a,b) =>parseFloat(a.weight)-parseFloat(b.weight))
        } else if (sortBy.value === "weightDesc") {
            filteredPokemons.sort((a,b) =>parseFloat(b.weight)-parseFloat(a.weight))
        }

        generator(filteredPokemons);
    }

    function filterByType (){
        const selectType = filterType.value.toLowerCase();
        let filteredPokemons;
        if(selectType === "all"){
            filteredPokemons = pokemons;
        } else{
            filteredPokemons = pokemons.filter(pokemon =>
                pokemon.type.includes(filterType.value));
        }
        generator(filteredPokemons);
    }

    function searchProduct(){
        const searchValue = searchInput.value.toLowerCase().trim()
    
        const filteredProduct = pokemonContainer.filter(card=>{
            const productName = card.getAttribute('data-name').toLowerCa
            return productName.includes(searchValue);
        })
    
        pokemonContainer.map(card=>card.style.display = 'none');
        filteredProduct.map(card=>card.style.display = 'block');
    
    }

    generator(pokemons);

    searchButton.addEventListener('click', searchProduct)
    filterType.addEventListener('change', filterByType);
    sortBy.addEventListener('change', filter);
    searchButton.addEventListener('click', filter);
