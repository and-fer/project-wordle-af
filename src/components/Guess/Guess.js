import React from 'react'
import { range } from '../../utils'

function Guess({ guess }) {
  return (
    <div>
      <p className="guess">
        {range(5).map(numCol => (
          <span key={numCol} className="cell">
            {guess ? guess[numCol] : undefined}
          </span>
        ))}
      </p>
    </div>
  )
}

export default Guess
