import React from 'react'
import Taskslice from '../features/tasks/Taskslice'
import Themeslice from '../features/theme/Themeslice'
import{configureStore} from '@reduxjs/toolkit'
const Store = configureStore({
    reducer:{
        task:Taskslice,
        theme:Themeslice
        
    }
})
 
export default Store