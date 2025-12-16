import React, { use } from 'react'
 import { useNavigate } from 'react-router-dom'
const home = () => {
  const navigate=useNavigate();

  return (
    <div>home tumhara gherr
      <button onClick={()=>navigate("/Contact")}>go to contact</button>
    </div>
  )
}

export default home