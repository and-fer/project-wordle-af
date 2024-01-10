import React, { useState } from 'react'
import Input from '../Input'

function Guesses() {
  const [guesses, setGuesses] = useState([])

  const handleGuesses = inputVal => {
    const newGuess = {
      inputVal,
      id: Math.random()
    }

    const guessesList = [...guesses, newGuess]
    setGuesses(guessesList)
  }
  return (
    <div>
      <div class="guess-results">
        <p class="guess">FIRST</p>
        <p class="guess">GUESS</p>
        {guesses.map(({ inputVal, id }) => (
          <p key={id} class="guess">
            {inputVal}
          </p>
        ))}
      </div>
      <Input handleGuesses={handleGuesses} />
    </div>
  )
}

export default Guesses
