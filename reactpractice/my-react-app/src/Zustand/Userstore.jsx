import React from 'react'
import { create } from 'zustand'
const Userstore = create((set) => ({
    user: [],
    loading:false,
    error:null,
    counter:0,
    toggle:"light",

    change:()=>{
        set((state)=>({toggle:state.toggle==="light"?"dark":"light"}));
    },
    increment:()=>{
        set((state)=>({counter:state.counter+1}));
    },
    decrement:()=>{
        set((state)=>({counter:state.counter-1}));
    },
   
    fetchuser:async()=>{
        set({loading:true,error:null});
        try{
            const res=await fetch('https://dummyjson.com/users');
            const data=await res.json();
            set({user:data.users,loading:false});
        }catch(err){
            set({loading:false,error:err.message});
        }

    }
}))

export default Userstore