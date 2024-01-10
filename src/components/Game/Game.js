import React from 'react'

import Guesses from '../Guesses/Guesses'

import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  return (
    <>
      <Guesses />
    </>
  )
}

export default Game
