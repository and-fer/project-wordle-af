import Guess from '../Guess/Guess'
import { range } from '../../utils'

function GuessEntries({ guesses }) {
  return (
    <div>
      <div class="guess-results">
        {range(6).map((numRow, id) => (
          <Guess key={numRow} guess={guesses[numRow]} />
        ))}
      </div>
    </div>
  )
}

export default GuessEntries
