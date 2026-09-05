import {useState, useEffect} from 'react'
import Clock from './components/Clock'
import Search from './components/Search'
import Favourites from './components/Favourites'
import Roll from './components/Roll'
import Info from './components/Info'



const App = () => {
  const [pokemon, setPokemon] = useState(null)
  return (
    <div className="flex flex-col pt-8 justify-start gap-5 items-center h-screen w-screen bg-[#0c1125]">
  

        <Clock/>
        <Search/>
        <div className='flex gap-3'>
          <Roll pokemon={pokemon} setPokemon={setPokemon}/>
          <Favourites/>
        </div>
        <Info pokemon={pokemon}/>
    </div>
  )
}

export default App