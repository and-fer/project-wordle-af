import React, { useState } from 'react'

function Guesses({ guesses }) {
  return (
    <div>
      <div class="guess-results">
        <p class="guess">FIRST</p>
        <p class="guess">GUESS</p>
        {guesses.map((guess, id) => (
          <p key={id} class="guess">
            {guess}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Guesses
