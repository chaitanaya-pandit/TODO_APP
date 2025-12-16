import React from 'react'
import useLocalStorage from './UseLocalstorage'
import Usecounter from './Usecounter'
const Theme = () => {
    // const [theme, setTheme] = useLocalStorage('theme','day');
    const {count,increment,decrement,reset} = Usecounter();
  return (
    <div>
        {/* <h2>{theme}</h2>
        <button onClick={()=> setTheme("dark")}>dark</button>
        <button onClick={()=> setTheme("day")}>light</button> */}
       <h2>{count}</h2>
        <button onClick={increment}>increment</button><br/>
        <button onClick={decrement}>decrement</button><br/>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Theme