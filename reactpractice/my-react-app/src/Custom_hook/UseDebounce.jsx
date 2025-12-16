import React from 'react'
import { useState } from 'react'
const UseDebounce = () => {
    const [input,setinput]=useState('');
    console.log(input);
  return (
    <div>
        {input}
        <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} />
    </div>
  )
}

export default UseDebounce