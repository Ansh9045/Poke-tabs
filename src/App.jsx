import {useState, useEffect} from 'react'
import Clock from './components/Clock'
import Search from './components/Search'
import Favourites from './components/Favourites'
import Roll from './components/Roll'

import bug from "./assets/bug.jpg"
import dragon from "./assets/dragon.jpg"
import electric from "./assets/electric.jpg"
import fairy from "./assets/fairy.jpg"
import fighting from "./assets/fighting.jpeg"
import fire from "./assets/ghost.jpg"
import flying from "./assets/grass.jpg"
import ghost from "./assets/ghost.jpg"
import grass from "./assets/grass.jpg"
import ground from "./assets/ground.webp"
import ice from "./assets/ice.jpg"
import normal from "./assets/normal.jpg"
import poison from "./assets/poison.jpg"
import psychic from "./assets/psychic.jpg"


const App = () => {
  const [background, setBackground] = useState(psychic)
  return (
    <div className="flex flex-col justify-center gap-5 items-center h-screen w-screen bg-[#0c1125]">
  

        <Clock/>
        <Search/>
        <div className='flex'>
          <Roll/>
          <Favourites/>
        </div>
        
    </div>
  )
}

export default App