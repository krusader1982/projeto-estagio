import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { getAluno } from "../Alunos/Alunos"

const initialValues = {
    nome: '',
    email: '',
    sexo: '',
    dt_nascimento: '',
    celular: ''
  }


function FormMed1({ formData, setFormData }) {

    const [aluno, setAluno] = useState(initialValues)
    const { id } = useParams();

    useEffect(
        () => {
          getAlunoData();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    
      const getAlunoData = async () => {
        let response = await getAluno(id);
        setAluno(response.data.alunos);  }

      

    return (
        <div className='app--container' >
            <div className='register--container' >
                <h1 className='register--title' >Cadastrar Medidas</h1>
                <h1 className='register--title'>{aluno.nome} </h1>
                <select name='alunoID'
                value={formData.alunoID}
                onChange={(event) => setFormData({ ...formData, alunoID: event.target.value })}    
          className='register--select' >
          <option >Aluno</option>
          <option value={id} 
          >{aluno.nome} </option>
          
        </select>
                <input
                    type='date'
                    name='data_medida'
                    placeholder='data medida'
                    className='register--input'
                    value={formData.data_medida}
                    onChange={(event) => setFormData({ ...formData, data_medida: event.target.value })}
                />
                <input
                    type='number'
                    name='peso'
                    placeholder='Peso'
                    className='register--input'
                    value={formData.peso}
                    onChange={(event) => setFormData({ ...formData, peso: event.target.value })}

                />
                <input
                    type='number'
                    name='altura'
                    placeholder='Altura'
                    className='register--input'
                    value={formData.altura}
                    onChange={(event) => setFormData({ ...formData, altura: event.target.value })}

                />
                <input
                    type='number'
                    name='IMC'
                    placeholder='IMC'
                    className='register--input'
                    value={formData.IMC}
                    onChange={(event) => setFormData({ ...formData, IMC: event.target.value })}

                />
            </div>
        </div>
    )
}

export default FormMed1