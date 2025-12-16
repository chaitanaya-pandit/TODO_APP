import { createSlice } from "@reduxjs/toolkit";
const Toggle = createSlice({
    name:"toggle",
    initialState:{value:"light"},
    reducers:{
        change:(state)=>{
            state.value=state.value==="light"?"dark":"light";
        }
    }
})
export const {change}=Toggle.actions;
export default Toggle.reducer;