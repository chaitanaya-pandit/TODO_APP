import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Slice'
import toggleReducer from './Toggle'
 const store = configureStore({
    reducer: {
        counter: counterReducer,
        toggle:toggleReducer
        
    },
})
export default store