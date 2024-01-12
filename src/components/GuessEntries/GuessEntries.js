function GuessEntries({ guesses }) {
  return (
    <div>
      <div class="guess-results">
        {guesses.map((guess, id) => (
          <p key={id} class="guess">
            {guess}
          </p>
        ))}
      </div>
    </div>
  )
}

export default GuessEntries
