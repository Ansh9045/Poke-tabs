import axios from 'axios'

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 30000,
})

const getPokemon = async (id) => {
    try {
        const response = await pokeApi.get(`pokemon/${id}`)
        return response.data
    } catch (err) {
        console.error(err)
        return null
    }
}
const getPokemonSpecies = async (id) => {
    try {
        const response = await pokeApi.get(`pokemon-species/${id}`)
        return response.data
    } catch (err) {
        console.error(err)
        return null
    }
}
const formatPokemonData = (data, speciesData) => {
    const sprite = data?.sprites?.other?.showdown?.front_default
    const highResSprite = data?.sprites?.other?.['official-artwork']?.front_default
    
    const flavorText = speciesData?.flavor_text_entries?.find(entry => entry.language.name === 'en')
    if (!data || !speciesData || !sprite || !flavorText) {
        return null
    }
    return {
        id: data.id,
        name: data.name,
        types: data.types.map(t => t.type.name),
        abilities: data.abilities.map(a => a.ability.name),
        sprites: sprite,
        flavorText: flavorText.flavor_text.replace(/\n|\f/g, ' '),
        highResSprite: highResSprite
    }
}
const getRandomPokemon = async () => {
    const numOfPokemon = 1025
    const id = Math.floor(Math.random() * numOfPokemon) + 1
    const [data, speciesData] = await Promise.all([
        getPokemon(id),
        getPokemonSpecies(id)
    ])
    return formatPokemonData(data, speciesData)
}
export { getPokemon, getPokemonSpecies, formatPokemonData, getRandomPokemon }