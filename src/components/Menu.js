import React from 'react'
import { NavLink } from 'react-router-dom'
import AddImage from '../layout/AddImage'
import './Menu.css'

const Menu = () => {
  return (
    <div className='nav-bar'>
        <AddImage />
        <NavLink to="/home">Home</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/Services">Services</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/login">Login</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/cadastro">Cadastre-se</NavLink>  
    </div>
  )
}

export default Menu