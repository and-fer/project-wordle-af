import React from 'react'
import { useState } from 'react'

function Input() {
  const [inputVal, setInputVal] = useState('')

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={e => {
          e.preventDefault()
          setInputVal('')
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={inputVal}
          onChange={e => {
            setInputVal(e.target.value.toUpperCase())
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
