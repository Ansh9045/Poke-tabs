import { useState, useEffect } from 'react'
import { getRandomPokemon } from '../utils/PokeApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Guess = () => {
    const [current, setCurrent] = useState(null)
    const [guess, setGuess] = useState('')
    const [correct, setCorrect] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [guessed, setGuessed] = useState(false)

    const handleInputChange = (e) => {
        setGuess(e.target.value)
        if (error && e.target.value != '') {
            setError(null)
        }
    }

    const handleGuess = () => {
        const trimmed = guess.trim().toLowerCase()
        if (!current) {
            setError('No Pokemon to guess!')
            return
        }
        if (trimmed === '') {
            setError('Please enter a guess!')
            return
        }
        if (trimmed === current.name.toLowerCase()) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }
        setGuessed(true)
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleGuess()
        }
    }
    const fetchPokemon = async () => {
        setLoading(true)
        setError(null)
        try {
            const p = await getRandomPokemon()
            setCurrent(p)
        } catch (error) {
            setError('Failed to fetch Pokemon!')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPokemon()
    }, [])
    const handleNext = () =>{
        setGuessed(false)
        setCorrect(false)
        setGuess('')
        setError(null)
        fetchPokemon()
    }
    const handleSkip = () =>{
        setGuessed(false)
        setCorrect(false)
        setGuess('')
        setError(null)
        fetchPokemon()
    }
    return (
        <div className="flex flex-col gap-3 items-center border-2 border-[#3ffc89]  p-5 rounded-xl">
            <h2 className="text-[#49c6fc] font-serif text-xl capitalize font-extrabold">GUESS THE POKEMON!!!</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col items-center gap-3">
                    <img src={current.highResSprite} className="h-32" style={{ filter: guessed ? 'none' : 'brightness(0%) contrast(100%)' }} />
                    {!guessed&&
                    <div className="flex border-2 border-[#3ffc89] rounded-xl overflow-hidden">
                        <input
                            type="text"
                            placeholder="Guess..."
                            className="py-1 px-4 border-none outline-none bg-[#0c1125] text-white text-md w-[150px] font-serif font-bold"
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                        />
                        <button className="px-5 py-1 bg-[#3ffc89] text-[#0c1125] font-bold" onClick={handleGuess}>
                            <FontAwesomeIcon icon={faCheck} className="text-md" />
                        </button>
                    </div>}
                    {error && <p className="text-red-500">{error}</p>}
                    {guessed && !correct && <p className="text-red-500">Incorrect! it's a {current.name}</p>}
                    {guessed && correct && <p className="text-[#3ffc89]">Correct! it's a {current.name}</p>}
                        {guessed && <button onClick={handleNext} className="bg-yellow-400 px-4 py-2 rounded-full text-[#0c1125] font-bold"
                    >Next</button>}
                    {!guessed && <button onClick={handleSkip} className="bg-yellow-400 px-4 py-2 rounded-full text-[#0c1125] font-bold"
                    >Skip</button> }
                </div>

            )
            }
        </div>
    )
}

export default Guess