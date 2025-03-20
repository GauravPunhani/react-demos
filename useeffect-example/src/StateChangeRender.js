import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const StateChangeRender = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`Count changed: ${count}`);
    }, [count]);
  return (
    <div> <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default StateChangeRender