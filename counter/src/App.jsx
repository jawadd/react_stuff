import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementValue = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }

  const decrementValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>React and Vite</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={incrementValue}>
        Increment Value ({count})
      </button>
      <button onClick={decrementValue}>
        Decrement Value ({count})
      </button>

      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
    </>
  )
}

export default App
