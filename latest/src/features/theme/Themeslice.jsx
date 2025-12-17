import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const Themeslice = createSlice({
    name:"theme",
    initialState:localStorage.getItem('theme') || 'light',
    reducers:{
        toggletheme:(state)=>{
            const newtheme=state === light ? "dark":"light";
            localStorage.setItem('theme', newtheme);
            return newtheme
        }
    }
})
const{toggletheme}=Themeslice.actions

export default Themeslice.reducer