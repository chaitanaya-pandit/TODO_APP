import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time,istime] = useState(0);
    const [start,istart] = useState(false);
    useEffect(() => {
        let interval;
        if(start){
            interval=setInterval(() => {
                istime(time => time + 1);
            },1000);
        }else{
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[start])
    return(
        <div>
            <h1>{time}</h1>
            <button onClick={() => istart(true)}>Start</button>
            <button onClick={() => istart(false)}>Stop</button>
            <button onClick={()=>istime(0)}>restart</button>
        </div>
    )
 
};

export default Stopwatch;
