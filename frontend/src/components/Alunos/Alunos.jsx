import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Aluno from '../Aluno/Aluno';
//import Ficha from '../Fichas/Ficha'



export const getAlunos = async () => {
  try {
      return await Axios.get('http://localhost:3006/alunos');
  } catch (error) {
      console.log('Error while calling getUsers api', error.message);

  }
}

export const getAluno = async (data) => {
  try {
      return await Axios.get(`http://localhost:3006/aluno/${data}`);
  } catch (error) {
      console.log('Error while calling getUser api', error.message);
      
  }
}

export const editAluno = async (data, id) => {
  try{
      return await Axios.put(`http://localhost:3006/editar-aluno/${id}`, data);

  } catch(error){
      console.log('Error while calling editUser api', error.message);
  }
}

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [listAlunos, setListAlunos]=useState();
  console.log(listAlunos)
  

  useEffect(() => {
    Axios.get("http://localhost:3006/alunos")
      .then((response)=> {
        setListAlunos(response.data.alunos)
      })
    },[])

  const removerAluno = aluno => {
    if (window.confirm(`Tem certeza que deseja remover "${aluno.nome}"?`)) {
      Axios.delete(`http://localhost:3006/aluno/${aluno.id_aluno}`)
        .then(response => {
          if (response.ok) {
            setAlunos(alunos.filter(x => x.id_aluno !== alunos.id_aluno))
          }
        })
    }
  }

  return (
    <>    
      {typeof listAlunos !=="undefined" &&
      listAlunos.map((aluno) => {
        return <Aluno
        key={aluno.id_aluno}
        ListAlunos={listAlunos}
        setListAlunos={setListAlunos}
        id={aluno.id_aluno}
        aluno={aluno.nome}
        email={aluno.email}
        sexo={aluno.sexo}
        dt_nascimento={aluno.dt_nascimento}
        celular={aluno.celular}
        removerAluno={() => removerAluno(aluno)}
      />
      
      })
      }
    </>
  )
}

export default Alunos