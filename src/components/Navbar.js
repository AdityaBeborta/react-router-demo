import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <NavLink exact activeClassName='active_class' to={'/about'}>about us</NavLink>
        <NavLink exact activeClassName='active_class' to={'/home'}>home</NavLink>
    </>
  )
}

export default Navbar