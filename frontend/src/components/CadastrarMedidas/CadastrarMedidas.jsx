import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";

import { getAluno } from "../Alunos/Alunos"

const initialValues = {
  nome: '',
  email: '',
  sexo: '',
  dt_nascimento: '',
  celular: ''
}


const CadastrarMedidas = () => {
  const [values, setValues] = useState();
  console.log(values);
  const navigate = useNavigate();

  const [aluno, setAluno] = useState(initialValues)
  const { id } = useParams();

  useEffect(
    () => {
      getAlunoData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  const getAlunoData = async () => {
    let response = await getAluno(id);
    setAluno(response.data.alunos);
  }

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3006/cadastrarmedidas", {
      
      alunoID: values.alunoID,
      peso: values.peso,
      altura: values.altura,
      IMC: values.IMC,
      gc_total: values.gc_total,
      gc_braco_e: values.gc_braco_e,
      gc_braco_d: values.gc_braco_d,
      gc_perna_e: values.gc_perna_e,
      gc_perna_d: values.gc_perna_d,
      gc_tronco: values.gc_tronco,
      mm_total: values.mm_total,
      mm_braco_e: values.mm_braco_e,
      mm_braco_d: values.mm_braco_d,
      mm_perna_e: values.mm_perna_e,
      mm_perna_d: values.mm_perna_d,
      mm_tronco: values.mm_tronco,
      massa: values.massa,
      gordura: values.gordura,
      agua: values.agua,
      constituicao: values.constituicao,
      i_metabolica: values.i_metabolica,
      TMB: values.TMB,
      data_medida: values.data_medida
    }).then((response) => {
      navigate('/alunos');
      console.log(response);
    });
  };

  return (
    <div className='app--container' >
      <div className='register--container' >
        <h1 className='register--title' >Cadastrar Medidas</h1>
        <h1 className='register--title'>{aluno.nome} </h1>        
        <select name='alunoID'
          onChange={handleChangeValues}
          className='register--select' >
          <option >Aluno</option>
          <option value={id} >{aluno.nome} </option>
        </select> 
        <input
          type='number'
          name='peso'
          placeholder='Peso'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input
          type='number'
          name='altura'
          placeholder='Altura'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input
          type='number'
          name='IMC'
          placeholder='IMC'
          className='register--input'
          onChange={handleChangeValues}
        />
        <div>
          <p>Gordura Corporal</p>
          <input
            type='number'
            name='gc_total'
            placeholder='Total'
            className='register--input'
            onChange={handleChangeValues}
          /><input
          type='number'
          name='gc_braco_e'
          placeholder='Braço Esquerdo'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input
            type='number'
            name='gc_braco_d'
            placeholder='Braço Direito'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='gc_perna_e'
            placeholder='Perna Esquerda'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='gc_perna_d'
            placeholder='Perna Direita'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='gc_tronco'
            placeholder='Tronco'
            className='register--input'
            onChange={handleChangeValues}
          />
        </div>
        <div>
          <p>Massa Muscular</p>
          <input
            type='number'
            name='mm_total'
            placeholder='Total'
            className='register--input'
            onChange={handleChangeValues}
          /><input
          type='number'
          name='mm_braco_e'
          placeholder='Braço Esquerdo'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input
            type='number'
            name='mm_braco_d'
            placeholder='Braço Direito'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='mm_perna_e'
            placeholder='Perna Esquerda'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='mm_perna_d'
            placeholder='Perna Direita'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='mm_tronco'
            placeholder='Tronco'
            className='register--input'
            onChange={handleChangeValues}
          />
        </div>
        <div>
          <p>Medidas</p>
          <input
            type='number'
            name='massa'
            placeholder='Massa Óssea (kg)'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='constituicao'
            placeholder='Constituição Física'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
          type='number'
          name='gordura'
          placeholder='Gordura Visceral'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input
            type='number'
            name='agua'
            placeholder='% de Água no organismo'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='i_metabolica'
            placeholder='Idade Metabólica'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='number'
            name='TMB'
            placeholder='TMB Kcal/dia'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='date'
            name='data_medida'
            placeholder='data medida'
            className='register--input'
            onChange={handleChangeValues}
          />
        </div>
        <Button
          variant="outlined"
          color="error"
          style={{ marginTop: 10, marginRight: 10 }}
          component={Link} to={'/alunos'}
        >
          Voltar
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10, marginRight: 10 }}
          //onClick={() => handleClickButton()} 
          onClick={() => { if (window.confirm('Cadastrar medidas?')) handleClickButton() }}

        >
          Cadastrar
        </Button>
      </div>
    </div>

  );
}

export default CadastrarMedidas