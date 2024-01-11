import React from 'react'
import { useState } from 'react'

function Input({ handleGuesses }) {
  const [inputGuess, setInputGuess] = useState('')
  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={e => {
          e.preventDefault()
          handleGuesses(inputGuess)
          setInputGuess('')
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={inputGuess}
          onChange={e => {
            setInputGuess(e.target.value.toUpperCase())
          }}
          pattern="[A-Za-z]{5}"
          title="5 letter word"
          required
        />
      </form>
    </div>
  )
}

export default Input
