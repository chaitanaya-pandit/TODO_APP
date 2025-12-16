import React from 'react'
import { useState } from 'react' // memo  from 'react'

import { memo } from 'react'
const Child = React.memo(function Child({ count }) {
  console.log("Child Rendered");
  return <h2>Count: {count}</h2>;
});

const Memo = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>change</button>
        <Child count={1} />
    </div>
  )
}

export default Memo