import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
const Usememo = () => {
    const [count, setCount] = useState(0);
    const heaveycalculation = () => {
    
    console.log("calculating...")
    let sum=0;
    for (let i = 0; i < 100000; i++) {
        sum+=i;
        
    }
    return sum 
}
const res=useMemo(()=>heaveycalculation(),[]);
  return (
    <div>
        <h1>{res}</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>change</button>

    </div>
  )
}

export default Usememo