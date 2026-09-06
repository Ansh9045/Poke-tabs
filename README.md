# Poke-tabs

Poke-tabs is a pokemon themed new tab layout!!!

---

> ### This was made for hackclub's stardance program for the Give Your Website a Pulse mission!!!

## What it does?

### Poke-tabs let you:
- Search anything using Google
- Get your own random pokemon (inspired by rng from stardance)
- View the type, name, flavor text and pixel stlye animated gif which looks really cool!!!
- Play Guess the pokemon and identify a pokemon from the silouette!!!
- Go to your favourite sites using the middle section!!!

## How it works?

- **Search** - It is a simple text type input element and button, when the user enters a search query, the value is stored in a state and when the user presses enter or search button, the browser opens a new tab with the url of `https://www.google.com/search?q=[query]`.
- **Pokemon Roll** - When the site loads, it rolls a random number between 1 to 1025, inclusive, this random number is then given as an input to the pokeApi which fetches it detailed data that includes id, name, types, abilities, animated sprite, high resolution static sprite and flavor text.
- **Guess** - It utilizes the same function for getting the random pokemon but it displays a high resolution static sprite with the brightness set to 0 and contrast set 100% which makes only the silouette of the pokemon visible, when the user guesses something, the pokemon is revealed along with results

