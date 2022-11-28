import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Tabela from '../Tabela/Tabela'
import moment from 'moment'

const columns = [
    {
        field: 'id_aluno',
        headerName: 'ID',
        width: 60
    },
    {
        field: 'nome',
        headerName: 'Nome',
        sortable: true,
        width: 250,
    },
    {
        field: 'sexo',
        headerName: 'Sexo',
        width: 50,
        alignItem:'center'

    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,

    },
    {
        field: 'celular',
        headerName: 'Celular',
        width: 150,

    },
    {
        field: 'dt_nascimento',
        headerName: 'Data de Nascimento',
        type: 'date',
        width: 150,
        renderCell:params=>moment(params.row.dt_nascimento).format('DD/MM/YYYY')
    },    
];

const AlunoTabela = () => {
    

    const [alunos, setAlunos] = useState([]);
    //const [listAlunos, setListAlunos]=useState();
    
    useEffect(() => {
        Axios.get("http://localhost:3006/alunos")
            .then((response) => {
                setAlunos(response.data.alunos)
            })
    }, [])      

    return (
        <Tabela
            rows={alunos}
            columns={columns}
            loading={!alunos.length}
        />
    )
}

export default AlunoTabela