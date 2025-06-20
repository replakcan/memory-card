import './App.css'
import pokemonNames from './data/pokemon-names.json'
import Card from './components/Card'

function App() {
  return (
    <main>
      {pokemonNames.map((pokemon) => (
        <Card key={pokemon.id} name={pokemon.name} />
      ))}
    </main>
  )
}

export default App
