import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/settings">settings</NavLink>
    </nav>
  )
}

export default Header