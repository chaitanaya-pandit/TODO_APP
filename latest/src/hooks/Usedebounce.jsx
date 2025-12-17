import React from 'react'
import { use } from 'react';
import { useState,useEffect } from 'react'
const Usedebounce = ( value,delay=500) => {
    const [debounce, setdebounce] = useState(value);
    useEffect(() => {
        const timer=setTimeout(() => {
            setdebounce(value)
        },value);
        return () => clearTimeout(timer);
    },[value,delay])
  return debounce
}

export default Usedebounce