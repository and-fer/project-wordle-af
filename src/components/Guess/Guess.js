import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  function Cell({ letter, status }) {
    const className = guess ? `cell ${status}` : 'cell'

    return <span className={className}>{letter}</span>
  }

  const guessStatus = checkGuess(guess, answer)

  return (
    <div>
      <p className="guess">
        {range(5).map(numCol => {
          return (
            <Cell
              key={numCol}
              letter={guessStatus ? guessStatus[numCol].letter : undefined}
              status={guessStatus ? guessStatus[numCol].status : undefined}
            />
          )
        })}
      </p>
    </div>
  )
}

export default Guess
