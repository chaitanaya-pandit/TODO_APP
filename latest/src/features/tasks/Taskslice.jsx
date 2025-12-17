import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const Taskslice =  createSlice({
    name:'task',
    initialState:JSON.parse(localStorage.getItem('tasks'))||[],
    reducers:{
        addtask:(state,action)=>{
            state.push(action.payload)
            localStorage.setItem('tasks',JSON.stringify(state))
        },
        deletetask:(state,action)=>{
            console.log("before",state)
           const newstate = state.filter((t)=>t.id !== action.payload)
           localStorage.setItem('tasks',JSON.stringify(newstate))
           console.log("after",newstate)
           return newstate;
        }
    }
});
export const {addtask,deletetask,initialstate}=Taskslice.actions;
 


export default Taskslice.reducer;