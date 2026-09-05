import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    if (error && e.target.value != ''){
      setError(null)
    }
  }
  const handleSearch = ()=>{
    const trimmed = query.trim()
    if (query != ''){
      setError(null)
      window.open(`https://www.google.com/search?q=${trimmed}`, '_blank')
    }
    else{
      setError('Please enter a search query!')
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <>
    <div className="flex border-2 border-[#3ffc89] rounded-xl overflow-hidden">
      <input type="text" placeholder="Search with Gooogle..." className="py-2 px-4 border-none outline-none bg-[#0c1125] text-white text-lg w-[400px] font-serif font-bold" onChange={handleInputChange} onKeyDown={handleKeyPress}/>
      <button className="px-5 py-3 bg-[#3ffc89] text-[#0c1125] font-bold" onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg"/>
      </button>
    </div>
    {error && <p className="text-red-500">{error}</p>}
    </>
  )
}

export default Search