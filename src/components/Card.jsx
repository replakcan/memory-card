import '../styles/Card.css'
import { usePokemon } from '../hooks/usePokemon'

function Card({ name, onClick }) {
  const { pokemon, error, loading } = usePokemon(name)

  //console.log(pokemon)

  if (loading) return <div>Loading...</div>

  if (error) return <div>Oops, something went wrong!</div>

  return (
    <div className="game-card" onClick={onClick}>
      <img src="hello" alt="" />
      <h2 >{pokemon.name}</h2>
    </div>
  )
}

export default Card
