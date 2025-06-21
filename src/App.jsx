import './App.css'
import pokemonNames from './data/pokemon-names.json'
import Card from './components/Card'
import { useState } from 'react'
import { shuffle } from './lib/shuffle-array.js'

function App() {
  const [clickedCards, setClickedCards] = useState(new Array(12).fill(false))
  const [bestScore, setBestScore] = useState(0)

  const currentStreak = clickedCards.filter((card) => card == true).length

  function handleClick(e) {
    const clickedPokemon = e.currentTarget.childNodes[1].innerHTML

    const clickedPokemonId = pokemonNames.find((pokemon) => pokemon.name == clickedPokemon).id

    if (clickedCards[clickedPokemonId] == false) {
      setClickedCards(clickedCards.map((card, i) => (i == clickedPokemonId ? true : card)))
    } else {
      if (currentStreak > bestScore) {
        setBestScore(currentStreak)
      }
      setClickedCards(clickedCards.map(() => false))
    }

    shuffle(pokemonNames)
  }

  return (
    <>
      <header>
        Current Score: {currentStreak} || Best Score: {bestScore}
      </header>
      <main>
        {pokemonNames.map((pokemon) => (
          <Card key={pokemon.id} name={pokemon.name} onClick={handleClick} />
        ))}
      </main>
    </>
  )
}

export default App
