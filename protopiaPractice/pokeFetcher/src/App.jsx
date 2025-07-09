import { useState } from 'react'
import PokeCard from './components/PokeCard'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  
  const fetcher = (event) => {
    setLoading(true);
    event.preventDefault();
    setPokemon(inputValue.toUpperCase());
    setLoading(false);
    }
  return (
    <>
      <h1>Please, write a Pokemon Name</h1>
      <form onSubmit={fetcher}>
        <input type="text" id="Name" aria-label='Pokemon-Input' onChange={(e) => setInputValue(e.target.value)}></input>
        <br></br>
        <button type='submit'>Send</button>
      </form>
      {loading && <p>Loading...</p>}
      <PokeCard
        pokemon={pokemon}/>
    </>
  )
}

export default App
