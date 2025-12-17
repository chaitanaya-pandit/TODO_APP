import React, { use } from 'react'
import {useState,useEffect} from 'react'
import Usedebounce from '../hooks/Usedebounce'
const Searchbar = ({onsearch}) => {
    const [text,settext]=useState('');
    const debouncedtext=Usedebounce(text,500);
    useEffect(() => {
        onsearch(debouncedtext);
        console.log(debouncedtext);
    }, [debouncedtext,onsearch])
  return (
    <div>
        <input type="text"
        placeholder='search....'
         value={text}
         onChange={(e)=>settext(e.target.value)}
         />
         
    </div>
  )
}

export default Searchbar