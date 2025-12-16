import React from 'react'
import { useReducer } from 'react'
const Counter = () => {
    const [state,dispatch]=useReducer(reducer,0);
    function reducer(state,action){
        switch(action.type){
            case 'increment':return state+1;
            case 'decrement':return state-1;
            case 'reset':return 0;
            default:return state;
        }
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default Counter