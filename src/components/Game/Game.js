import React, { useState } from 'react'

import Input from '../Input'
import GuessEntries from '../GuessEntries/GuessEntries'

import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])

  function handleGuesses(inputGuess) {
    setGuesses([...guesses, inputGuess])
  }

  return (
    <>
      <GuessEntries guesses={guesses} answer={answer} />
      <Input handleGuesses={handleGuesses} />
    </>
  )
}

export default Game
