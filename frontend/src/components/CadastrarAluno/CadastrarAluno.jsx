import React, { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./CadastrarAluno.css"
import NavBar from '../NavBar/NavBar';

const CadastrarAluno = () => {
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
    Axios.post("http://localhost:3006/cadastrar", {
      nome: values.nome,
      sexo: values.sexo,
      email: values.email,
      dt_nascimento: values.dt_nascimento,
      celular: values.celular
    }).then((response) => {
      navigate('/alunos');
    });
  };

  return (
    <>
      <NavBar />
      <div className='app--container' >
        <div className='register--container' >
          <h1 className='register--title' >Cadastrar</h1>
          <input
            type='text'
            name='nome'
            placeholder='Nome'
            className='register--input'
            onChange={handleChangeValues}
          />
          <select name='sexo'
            onChange={handleChangeValues}
            className='register--select' >
            <option >Sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outros</option>
          </select>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='date'
            name='dt_nascimento'
            placeholder='Data de Nascimento'
            className='register--date'
            onChange={handleChangeValues}
          />
          <input
            type='text'
            name='celular'
            placeholder='Celular'
            className='register--input'
            onChange={handleChangeValues}
          />
          <button
            className='register--button'
            onClick={() => handleClickButton()}
          >Cadastrar
          </button>
        </div>
      </div>
    </>

  );
}

export default CadastrarAluno