import '../styles/Card.css'
import { usePokemon } from '../hooks/usePokemon'

function Card({ name }) {
  const { pokemon, error, loading } = usePokemon(name)

  console.log(pokemon)

  if (loading) return <div>Loading...</div>

  if (error) return <div>Oops, something went wrong!</div>

  return (
    <div className="game-card">
      <img src="" alt="" />
      <h2>{pokemon.name}</h2>
    </div>
  )
}

export default Card
