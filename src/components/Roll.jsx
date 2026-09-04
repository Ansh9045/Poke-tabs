import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomPokemon } from '../utils/PokeApi'

const numOfPokemon = 1025

const typeColours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};


const Roll = () => {
  const [pokemon, setPokemon] = useState(null)
  const onClick = async () => {
    try {
      const p = await getRandomPokemon()
      console.log(pokemon)
      setPokemon(p)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    onClick()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-5 border-2 border-[#3ffc89] rounded-xl gap-1">
      {pokemon && (<div className="flex flex-col items-center gap-2 w-[200px]">

        <img src={pokemon.sprites} alt={pokemon.name} className="h-24" style={{imageRendering: "pixelated"}} />
        <h2 className="text-xl font-bold text-[#49c6fc] text-center">{pokemon.name.toUpperCase()}</h2>
        <div className="flex gap-2 justify-center">

          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="text-white text-xs font-bold p-1 pl-2 pr-2 rounded-full"
              style={{ backgroundColor: typeColours[type] }}
            >
              {type.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
      )
      }
      <button onClick={onClick} className="bg-yellow-400 px-4 py-2 rounded-full text-[#0c1125] font-bold mt-4">
        Roll
      </button>
    </div>
  )
}

export default Roll