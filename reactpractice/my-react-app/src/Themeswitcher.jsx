import React from 'react'
import { useState } from 'react'
const Themeswitcher = () => {
   const [theme, setTheme] = useState(false);
   const toggletheme = () => {
    setTheme(!theme);
    console.log(theme)
   }
  return (
    <div>
        <button onClick={toggletheme}> changebackground</button>
        <div style={{backgroundColor: theme ? 'black' : 'white',color: theme ? 'white' : 'black',
            height: '200px', width: '200px',display:'flex',justifyContent:'center',alignItems:'center'
        }}> hiii brother </div>
        
    </div>
  )
}

export default Themeswitcher