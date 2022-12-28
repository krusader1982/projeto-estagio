import React, { useState } from 'react';
import Axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const Signup = () => {
    const [values, setValues] = useState();
    const navigate = useNavigate();
    console.log(values)

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post("http://localhost:3006/signup", {
            nome: values.nome,
            email: values.email,
            password: values.password,
        }).then((response) => {
            navigate('/login');
        });
    };

    return (
        <div className='app--container' >
            <div className='register--container' >
                <h1 className='register--title' >Registrar</h1>
                <input
                    type='text'
                    name='nome'
                    placeholder='Nome'
                    className='register--input'
                    onChange={handleChangeValues}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='register--input'
                    onChange={handleChangeValues}
                />
                <input
                    type='text'
                    name='password'
                    placeholder='Password'
                    className='register--input'
                    onChange={handleChangeValues}
                />
                <button
                    className='register--button'
                    onClick={() => handleClickButton()}
                >Enviar
                </button>
                <Button
                    variant="outlined"
                    color="error"
                    style={{ marginTop: 10, marginRight: 10 }}
                    component={Link} to={'/alunos'}
                >
                    Voltar
                </Button>
            </div>
        </div>
    );
}

export default Signup