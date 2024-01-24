import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  // function classNameStatus(num) {
  //   let userLetter = checkGuess(guess, 'WALLO')
  //   const baseClass = 'cell'
  //   let statusClass = ''

  //   if (userLetter === null) {
  //     return baseClass
  //   }

  //   if (userLetter[num].status === 'correct') {
  //     statusClass = 'correct'
  //   }
  //   if (userLetter[num].status === 'misplaced') {
  //     statusClass = 'misplaced'
  //   }
  //   if (userLetter[num].status === 'incorrect') {
  //     statusClass = 'incorrect'
  //   }

  //   return `${baseClass} ${statusClass}`
  // }

  function Cell({ letter, status }) {
    return (
      <span className={}>
        {/* {guess ? guess[numCol] : undefined} */}
      </span>
    )
  }

  const guessStatus = checkGuess(guess, answer)

  return (
    <div>
      <p className="guess">
        {range(5).map(numCol => {
          return <Cell key={numCol} />
        })}
      </p>
    </div>
  )
}

export default Guess
