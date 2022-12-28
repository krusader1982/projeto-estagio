import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import GorduraCorporal from "../Graficos/GorduraCorporal";
import IdadeMetabolica from "../Graficos/IdadeMetabolica"
import Peso from "../Graficos/Peso"



import { getAluno } from "../Alunos/Alunos"
import NavBar from "../NavBar/NavBar";
import MassaMuscular from "../Graficos/MassaMuscular";
import IMC2 from "../Graficos/IMC2";
//import DetalhesMedida from "../Medida/DetalhesMedida";

const initialValues = {
    nome: '',
    email: '',
    sexo: '',
    dt_nascimento: '',
    celular: ''

}

const DetalhesAluno = () => {
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

    return (
        <div>
            <NavBar />

            <div className="app--container">
                <div className='card--container'>
                    <h1 className='card--title'>{aluno.nome} </h1>
                    <p className='card--body'>ID:{aluno.id_aluno} </p>
                    <p className='card--body'>Email:{aluno.email} </p>
                    <p className='card--body'>Sexo:{aluno.sexo} </p>
                    <p className='card--body'>Celular:{aluno.celular} </p>
                    <p className='card--body'>Nascimento:{aluno.dt_nascimento} </p>

                    <Button
                        variant="outlined"
                        color="error"
                        style={{ marginTop: 10, marginRight: 100, marginLeft: 20 }}
                        component={Link} to={'/alunos'}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: 10, marginRight: 100 }}
                        component={Link} to={`/aluno/${aluno.id_aluno}/cadastrarmedidas`}
                    >
                        Cadastrar Medidas
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: 10, marginTop: 10 }}
                        component={Link} to={`/editar-aluno/${aluno.id_aluno}`}
                    >
                        Editar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: 10, marginTop: 10 }}
                        component={Link} to={`/aluno/${aluno.id_aluno}/fichas`}
                    >
                        Fichas
                    </Button>
                </div>


            </div>

            <div className="app--container--grafico">
                <GorduraCorporal/>
                <MassaMuscular/>
                <Peso />
                <IMC2/>
                <IdadeMetabolica />
            </div>
        </div>



    )
}

export default DetalhesAluno;