import React from 'react'
import { useState,useEffect,useRef } from 'react'
const Stopwatch = () => {
    const [seconds,setseconds]=useState(0);
    const interval=useRef(null);
    const start=()=>{
        if(interval.current !== null) return;
        console.log(interval.current)
        interval.current=setInterval(()=>{
            setseconds((s)=>s+1);
        },1000)
    }
    const stop=()=>
    {
        clearInterval(interval.current)
        interval.current=null;
    }
    const reset=()=>{
        stop();
        setseconds(0);
    }
  return (
    <div>
        <h2>Stopwatch</h2>
      <h3>{seconds} sec</h3>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch