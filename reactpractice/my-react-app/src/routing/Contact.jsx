import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>Contact hi contact hi

      <div>
        <button onClick={()=>navigate("/")}> go to home</button>
      </div>
    </div>
  )
}

export default Contact