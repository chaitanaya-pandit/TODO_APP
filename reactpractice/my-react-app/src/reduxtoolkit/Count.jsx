import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from './Slice'
import{change} from './Toggle'
const Count = () => {
    const theme=useSelector((state)=>state.toggle.value);
    const change=useDispatch();
    const count=useSelector((state)=>state.counterslice.value);
    const dispatch=useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment)}>increment</button>
        <button onClick={()=>dispatch(decrement)}>decrement</button>
        <button onClick={()=>dispatch(change)}>change</button>
        <p>{theme}</p>
    </div>
  )
}

export default Count