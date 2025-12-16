import React, { useState } from 'react'
import { ThemeContext } from '/src/usecontext/Themecontext'
import Toggle from '/src/usecontext/Toggle'

const Store = () => {
  const [theme, setTheme] = useState("");
  const [array, setarray] = useState([]);
  const [add, setadd] = useState(false);

  const addinput = () => {
    setarray([...array, theme]);
    setTheme(" ");
  };

  const remove = (id) => {
    setarray(array.filter((item, index) => index !== id));
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, setTheme, 
      add, setadd, 
      addinput, 
      array, setarray, 
      remove 
    }}>
      <Toggle />
    </ThemeContext.Provider>
  )
}

export default Store
