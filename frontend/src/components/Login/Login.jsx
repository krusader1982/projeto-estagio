import React, { useState, useContext } from 'react';
//import Axios from 'axios'
//import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import { AuthContext } from '../context/auth';

const Login = () => {
    const { authenticated, login } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password })
        login(email, password);
    }

    return (
        <div className='app--container' >
            <form onSubmit={handleSubmit}>
                <div className='register--container' >
                    <h1 className='register--title' >Login</h1>
                    <input
                        type='email'
                        name='email'
                        id="email"
                        placeholder='Email'
                        className='register--input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='register--input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className='register--button'
                        type="submit"
                    >Entrar
                    </button>
                    <span>Não tem conta?</span>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: 10, marginTop: 10 }}
                        component={Link} to={`/signup`}
                    >
                        Registre-se
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Login