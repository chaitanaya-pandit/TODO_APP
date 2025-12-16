import React, { useContext } from 'react'
import { ThemeContext } from '/src/usecontext/Themecontext'

const Toggle = () => {
  const { theme, setTheme , add,setadd,addinput,array,setarray,remove} = useContext(ThemeContext);

  return (
    <div>
      <h1>todo app</h1>

      <div>
        <input type="text" onChange={(e)=>setTheme(e.target.value)}/>
        <button onClick={addinput}>add</button>
      </div>

      <ul>
        {array.map((item,index)=>
        <li key={index}>{item}
              <button onClick={()=>remove(index)}>delete</button> 
              </li>)}
      </ul>
      
    </div>
  )
}

export default Toggle
