import React from 'react'

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

const Info = ({pokemon}) => {
  if (!pokemon) {
    return (
      <div className="text-sm text-white w-[500px] border-2 border-[#3ffc89] rounded-xl px-5 py-3">Loading...</div>
    )
  }
  return (
    <div className="text-sm w-[500px] border-2 border-[#3ffc89] font-mono font-bold rounded-xl px-5 py-3" style={{color: typeColours[pokemon.types[0]]}}>
      {pokemon.flavorText}
      </div>
  )
}

export default Info