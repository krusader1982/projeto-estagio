import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { pink } from '@mui/material/colors';
import './NavBar.css'
import { AuthContext } from '../context/auth';


const NavBar = () => {

    const { logout } = useContext(AuthContext);  


    const handleLogout = () => {
        logout();
    }

    return (
        <header className='header' >
            <ul className='menu'>
                <li >
                    <NavLink to="/" className="ativa">Home</NavLink>
                </li>

            </ul>
            <nav>
                <ul className='menu' >
                    <li>
                        <NavLink to="/alunos">Alunos Cadastrados</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cadastrar" >Adicionar Alunos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <div className='menu_logout'>
                        <li>
                            <LogoutIcon sx={{ color: pink[500] }} onClick={handleLogout} />
                        </li>
                    </div>

                </ul>
            </nav>
        </header>
    )
}

export default NavBar