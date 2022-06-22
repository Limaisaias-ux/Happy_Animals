import React from 'react'
import { NavLink } from 'react-router-dom'
import AddImage from '../layout/AddImage'
import './Menu.css'

const Menu = () => {
  return (
    <div className='nav-bar'>
        <AddImage />
        <div className='itens'>
        <NavLink style={{margin: '0 0 0 10px'}} to="/">Home</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/Produtos">Produtos</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/login">Login</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/cadastro">Cadastre-se</NavLink>
        </div>  
    </div>
  )
}

export default Menu