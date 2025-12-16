import React from 'react'
import { useState } from 'react'
const colorpicker = () => {
    const [color, setColor] = useState('#000000');
    const changebackground = (e) => setColor(e.target.value);

  return (
    <div>
        <input type="color" value={color} onChange={e => changebackground(e)} />
        <div style={{ backgroundColor: color, width: '100px', height: '100px' }} ></div>
    </div>
  )
}

export default colorpicker