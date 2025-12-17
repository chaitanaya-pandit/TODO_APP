import React from 'react'
export const initialstate={
    name:'',
    error:""
}
export default function taskform (state,action){
    switch(action.type){
        case "setname":
            return {...state,name:action.payload,error:''};

        case"error":
            return{ ...state,error:action.payload};

        case"reset":
           return initialstate;

        default:
            return state
    }
}