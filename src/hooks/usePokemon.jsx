import { useEffect, useState } from 'react'

export function usePokemon(pokemonName) {
  const [pokemon, setPokemon] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) throw new Error('Error occured')

        return response.json()
      })
      .then((response) => setPokemon(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { pokemon, error, loading }
}
