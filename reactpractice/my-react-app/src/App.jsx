import React from 'react'
import Colorpicker from '/src/Colorpicker.jsx'
import Themeswitcher from '/src/Themeswitcher'
import Stopwatch from '/src/Stopwatch'
import Onlinedetector from '/src/Onlinedetector'
import Liveweather from '/src/Liveweather'
import Store from './usecontext/Store'
import Counter from './usereducer/Counter'
import Product from './usereducer/Product'
import Function from './usereducer/Function'
// import Stopwatch from './useref/Stopwatch'
import Connect from './routing/Connect'
import { BrowserRouter } from 'react-router-dom'
import Memo from './optmize_hook/Memo'
import Usememo from './optmize_hook/Usememo'
// import Localstorage from './Custom_hook/UseLocalstorage'
import Theme from './Custom_hook/Theme'
import UseDebounce from './Custom_hook/UseDebounce'
import Fetchuser from './Zustand/Fetchuser'
import Count from './reduxtoolkit/Count'
const App = () => {
  return (
    <div>
    {/* <Colorpicker/> */}
    {/* <Themeswitcher/> */}
    {/* <Stopwatch/> */}
    {/* <Onlinedetector/> */}
    {/* <Liveweather/> */}
    {/* <Store/> */}
    {/* <Counter/> */}
    {/* <Product/> */}
    {/* <Function/> */}
    {/* <Stopwatch/> */}
     {/* <Connect/> */}
     {/* <Memo/> */}
     {/* <Usememo/>    */}
     {/* <Localstorage/> */}
     {/* <Theme/> */}
     {/* <UseDebounce/> */}
     <Fetchuser/>
    
    </div>

  )
}

export default App