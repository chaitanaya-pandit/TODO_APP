import React from 'react'
import { useReducer } from 'react'
import taskform from '/src/reducers/Formreducer'
import { initialstate } from '/src/reducers/Formreducer'
import { useDispatch,useSelector } from 'react-redux'
import { addtask , deletetask} from '/src/features/tasks/Taskslice'
const Tasklist = () => {
    const [state,dispatchform]=useReducer(taskform,initialstate);
    const dispatch=useDispatch();
    const taskinfo=useSelector((state)=>state.task);
    const handleadd=()=>{
        if(!state.name.trim()){
            dispatchform(
                {
                    type:'error',
                    payload:'name is required'
                }
            )
        }
        dispatch(addtask(
            {id:Date.now(),name:state.name}
        ));
        dispatchform(
            {
                type:'reset'
            }
        )
    }
  return (
    <div>
        <input
         type="text" 
         placeholder='enter name....'
         value={state.name} 
         onChange={
            (e)=>dispatchform({
                type:'setname'
                ,payload:e.target.value
                })} />
        <button onClick={handleadd}>add</button>
        {state.error && <p>{state.error}</p>}
        {
            taskinfo.map((item)=>{
                return(
                <div key={item.id}>
                    {item.name}
                    <button onClick={
                        ()=>dispatch(deletetask(item.id))}>deletetask</button>

                </div>
                )
            })
        }

    </div>
  )
}

export default Tasklist