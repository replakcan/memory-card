import './App.css'
import pokemonNames from './data/pokemon-names.json'
import Card from './components/Card'
import { useState } from 'react'

function App() {
  const [clickedCards, setClickedCards] = useState(new Array(12).fill(false))
  const [streak, setStreak] = useState(0)

  function handleClick(e) {
    e.stopPropagation()
    const clickedPokemon = e.currentTarget.childNodes[1].innerHTML

    const pokemonIndex = pokemonNames.find((pokemon) => pokemon.name == clickedPokemon).id

    setClickedCards(
      clickedCards.map((card, i) => {
        return i == pokemonIndex ? true : card
      })
    )
  }

  console.log(clickedCards)

  return (
    <>
      <header>Score: </header>
      <main>
        {pokemonNames.map((pokemon) => (
          <Card key={pokemon.id} name={pokemon.name} onClick={handleClick} />
        ))}
      </main>
    </>
  )
}

export default App
