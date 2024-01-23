import Guess from '../Guess/Guess'
import { range } from '../../utils'

function GuessEntries({ guesses, answer }) {
  return (
    <div>
      <div className="guess-results">
        {range(6).map((numRow, id) => (
          <Guess key={numRow} guess={guesses[numRow]} answer={answer} />
        ))}
      </div>
    </div>
  )
}

export default GuessEntries
