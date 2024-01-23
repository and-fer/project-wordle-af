import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess }) {
  function classNameStatus(num) {
    let userLetter = checkGuess(guess, 'WALLO')
    const baseClass = 'cell'
    let statusClass = ''

    if (userLetter === null) {
      return baseClass
    }

    if (userLetter[num].status === 'correct') {
      statusClass = 'correct'
    }
    if (userLetter[num].status === 'misplaced') {
      statusClass = 'misplaced'
    }
    if (userLetter[num].status === 'incorrect') {
      statusClass = 'incorrect'
    }

    return `${baseClass} ${statusClass}`
  }

  return (
    <div>
      <p className="guess">
        {range(5).map(numCol => {
          return (
            <span key={numCol} className={classNameStatus(numCol)}>
              {guess ? guess[numCol] : undefined}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default Guess
