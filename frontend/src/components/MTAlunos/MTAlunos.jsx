import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import SearchBar from "material-ui-search-bar";
import React, { useState, useEffect } from 'react'

import Axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';

export const MTAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = alunos.filter((row) => {
      return row.nome.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setAlunos(filteredRows)
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  //const [listAlunos, setListAlunos]=useState();

  useEffect(() => {
    Axios.get("http://localhost:3006/alunos")
      .then((response) => {
        setAlunos(response.data.alunos)
      })
  }, [])

  const removerAluno = row => {
    if (window.confirm(`Tem certeza que deseja remover "${row.nome}"?`)) {
      Axios.delete(`http://localhost:3006/aluno/${row.id_aluno}`)
        .then(response => {
          if (response.ok) {
            setAlunos(alunos.filter(x => x.id_aluno !== row.id_aluno))
          }
        })
    }
  }

  return (
    <>
    <NavBar/>
    <Paper>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Sexo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Celular</TableCell>
              <TableCell>Data de Nascimento</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((row) => (
              <TableRow
                key={row.id_aluno}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.sexo}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.celular}</TableCell>
                <TableCell>{row.dt_nascimento}</TableCell>
                <TableCell><DeleteIcon onClick={() => removerAluno(row)} /></TableCell>
                <TableCell><Link to={`/editar-aluno/${row.id_aluno}`} ><EditIcon /></Link></TableCell>
                <TableCell><Link to={`/aluno/${row.id_aluno}`} ><VisibilityIcon /></Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

    </>
    
  )
}

export default MTAlunos