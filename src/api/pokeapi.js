
// Base URL of pokeapi
const baseURL = "https://pokeapi.co/api/v2/pokemon/";


// We expect to always recuieve a Pokemon name
export const fetchPokemon = async (pokemon) => {

    if (!pokemon){
        return
    }
    
    try {
        const response = await fetch(baseURL + pokemon);
        const data = await response.json();
        return data;
    }
    catch (err){
        console.error("Error recieved", err);
    }
};

