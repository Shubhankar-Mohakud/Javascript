// POKEDEX

async function fetchData(){
    
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("Faild to load resource");
        }

        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const pokemon_name = document.getElementById("pokemon-name");
        pokemon_name.textContent = data.name;
    } catch (error) {
        console.error("Couldn't find Pokemon");
    }
}