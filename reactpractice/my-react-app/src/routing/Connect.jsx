import React from 'react'
import{Routes,Route,Link} from 'react-router-dom'
import Home from '/src/routing/Home'
import About from '/src/routing/About'
import Contact from '/src/routing/Contact'
const Connect = () => {
  return (
    <div>
     <nav>
        <Link to="/"> home</Link>|
        <Link to="/About"> about</Link>|
        <Link to="/Contact"> contact</Link>
     </nav>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about/:id" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
        
    </div>
  )
}

export default Connect