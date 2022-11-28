import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import "./Aluno.css"

function Aluno(props) {
  return (
    <>
    <div className='flex' >
        <div className='card--container'>
          <h1 className='card--title'>{props.aluno} </h1>
          <p className='card--body'>ID:{props.id} </p>
          <p className='card--body'>Email:{props.email} </p>
          <p className='card--body'>Sexo:{props.sexo} </p>
          <p className='card--body'>Celular:{props.celular} </p>
          <p className='card--body'>Nascimento:{props.dt_nascimento} </p>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 10 }}
            component={Link} to={`/aluno/${props.id}`} >
            Detalhes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: 10 }}
            component={Link} to={`/editar-aluno/${props.id}`}
          >
            Editar
          </Button>
          <Button
            variant="outlined"
            color="error"
            style={{ margin: 10 }}
            onClick={props.removerAluno}
          >
            Excluir
          </Button>
        </div>        
      </div>            
    </>
  )
}

export default Aluno