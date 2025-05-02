import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return (
    <div className='counter'>
      <h1>The World's Most Advanced, State-of-the-Art, and Sophisticated Counter System</h1>
      
      <div className="counter-display">
        {count}
      </div>
      
      <div className="button-group">
        <button 
          onClick={decrement}
          disabled={count <= 0}
          aria-label="Decrement"
        >
          Decrement
        </button>
        <button 
          onClick={increment}
          aria-label="Increment"
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter;