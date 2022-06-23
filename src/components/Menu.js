import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import AddImage from '../layout/AddImage'
import './Menu.css'
import { useAuth } from '../providers/authProvider'

const Menu = () => {

  const {isLogged, userLogged, setIsLogged, setUserLogged} = useAuth();
  const logout = () => {
    setIsLogged(false)
    setUserLogged({})
    localStorage.removeItem('userLogged')
  }

  return (
    <div className='nav-bar'>
        <AddImage />
        <div className='itens'>
        <NavLink style={{margin: '0 0 0 10px'}} to="/">Home</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/Produtos">Produtos</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/login">Login</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="/cadastro">Cadastre-se</NavLink>
        </div>
        { isLogged
          ? (
            <>
            <span>Logado como: {userLogged.email}</span> 
            <button onClick={logout}>Sair</button>
          </>
          )
          : (<span> </span>)
        }
    </div>
  )
}

export default Menu