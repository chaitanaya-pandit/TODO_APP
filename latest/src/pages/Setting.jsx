import React from 'react'
import{useDispatch} from 'react-redux'
const Setting = () => {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(toggletheme())}>
            toggletheme
        </button>
    </div>
  )
}

export default Setting