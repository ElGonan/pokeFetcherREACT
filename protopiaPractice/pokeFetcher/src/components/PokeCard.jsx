import { fetchPokemon } from "../api/pokeapi"
import { useState, useEffect } from 'react'
import './css/PokeCard.css'

const PokeCard = ({pokemon}) => {
    const [pokeData, setpokeData] = useState(null)
    
useEffect( () => {
    const fetchData = async () => {

        const poke = await fetchPokemon(pokemon);
        setpokeData(poke);
    };
    fetchData();

},[pokemon])

    return (
        <>
        {pokeData ? 
            <>
            <div className="PokemonCard">
                <div className="pokeData">
                    <div className="pokeImage">
                        <img className="image" id="PokeImage" src={pokeData.sprites.front_default} alt={`${pokeData.name} image`}/> 
                    </div>
                    <div className="pokeInfo">
                        <h1 className="DataTitle">Name:</h1>
                        <p className="DataText">{(pokeData.name).toUpperCase()}</p>
                        <h1  className="DataTitle">type:</h1>
                        <p className="DataText">
                            {pokeData.types.map(type =>
                            <span key={type.type.name} className="DataTypeTag">{type.type.name}</span>
                            )}
                        </p>
                        <h1  className="DataTitle">Weight:</h1>
                        <p className="DataText">{pokeData.weight} KG (?)</p>
                        <h1  className="DataTitle">Pokedex No. :</h1>
                        <p className="DataText">{pokeData.id}</p>
                    </div>
                </div>
            </div>
            </>
        :
        <h2>Please, write a name or correct the one written.</h2>}
        </>
    )

}

export default PokeCard