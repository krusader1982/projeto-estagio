import { useState, useEffect } from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { getAluno, editAluno } from "../Alunos/Alunos"

const Container = styled(FormGroup)`
width: 50%;
margin: 2% auto 0 auto;
& > div{
    margin-top:10px;
}
`
const initialValues = {
    nome: '',
    email: '',
    sexo: '',
    dt_nascimento: '',
    celular: ''

}

const EditarAluno = () => {

    const [aluno, setAluno] = useState(initialValues)
    const navigate = useNavigate();
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

    const onValueChange = (e) => {
        setAluno({ ...aluno, [e.target.name]: e.target.value })
        console.log(aluno);
    }

    const addUserDetails = async () => {
        await editAluno(aluno, id);
        navigate('/alunos');
    }

    const cancelUserDetails = () => {
        return (navigate(`/aluno/${aluno.id_aluno}`))
    }


    return (
        <Container>
            <Typography variant='h4' >Editar Aluno</Typography>
            <FormControl>
                <InputLabel>Nome</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nome" value={aluno.nome} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={aluno.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Sexo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="sexo" value={aluno.sexo} />
            </FormControl>
            <FormControl>
                <InputLabel>dt_nascimento</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name="dt_nascimento" value={aluno.dt_nascimento} />
            </FormControl>
            <FormControl>
                <InputLabel>Celular</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="celular" value={aluno.celular} />
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant='contained'>Salvar</Button>
            </FormControl>
            <FormControl>
                <Button onClick={() => cancelUserDetails()} color="error" variant="outlined">Cancelar</Button>
            </FormControl>
        </Container>


    )
}

export default EditarAluno;