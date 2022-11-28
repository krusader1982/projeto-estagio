import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import "./Medida.css"

const Medida = (props) => {
    return (
      <section className='flex'>
        <div >    
          <div className='card--container--Medida'>
            <h1 className='card--title'>Medidas</h1>
            <p className='card--body'>ID Medida: {props.id} </p>
            <p className='card--body'>ID Aluno: {props.aluno} </p>
            <p className='card--body'>IMC: {props.IMC} </p>
            <p className='card--body'>Peso: {props.peso}</p>
            <p className='card--body'>Altura: {props.altura} </p>
            <p className='card--body'>Data: {props.dia} </p>                        
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: 10  }}
              component={Link} to={'/'}
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              color="error"
              style={{ margin: 10 }}              
            >
              Excluir
            </Button>    
          </div>    
        </div>

      </section>
        
    
    
    
    
    
    
      )
}

export default Medida