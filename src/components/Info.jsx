import React from 'react'

const Info = ({pokemon}) => {
  if (!pokemon) {
    return (
      <div className="text-sm text-white w-[500px] border-2 border-[#3ffc89] rounded-xl px-5 py-3">Loading...</div>
    )
  }
  return (
    <div className="text-sm text-white w-[500px] border-2 border-[#3ffc89] rounded-xl px-5 py-3">{pokemon.flavorText}</div>
  )
}

export default Info