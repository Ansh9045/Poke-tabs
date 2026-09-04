import {useState, useEffect} from 'react'
import Clock from './components/Clock'
import Search from './components/Search'
import Favourites from './components/Favourites'
import Roll from './components/Roll'



const App = () => {
  return (
    <div className="flex flex-col justify-center gap-5 items-center h-screen w-screen bg-[#0c1125]">
  

        <Clock/>
        <Search/>
        <div className='flex gap-3'>
          <Roll/>
          <Favourites/>
        </div>
        
    </div>
  )
}

export default App