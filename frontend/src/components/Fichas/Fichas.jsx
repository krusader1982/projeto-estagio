import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios'
import "./Fichas.css"
import Ficha from "./Ficha"
//import Agua from "../Graficos/Agua";
//import { getAluno } from "../Alunos/Alunos"
//import { getMedida } from "../Medidas/Medidas";
//import { Link } from 'react-router-dom';

const getMedida = async (data) => {
    try {
        return await Axios.get(`http://localhost:3006/aluno/${data}/medidas`);
    } catch (error) {
        console.log('Error while calling getUser api', error.message);

    }
}

const getAluno = async (data) => {
    try {
        return await Axios.get(`http://localhost:3006/aluno/${data}`);
    } catch (error) {
        console.log('Error while calling getUser api', error.message);
        
    }
  }

const Fichas = (props) => {

    const [aluno, setAluno] = useState()
    const { id } = useParams();
    useEffect(
        () => {
            getAlunoData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    const getAlunoData = async () => {
        let response = await getAluno(id);
        setAluno(response.data.alunos);
        console.log(aluno)
    }
    
    const [listMedida, setListMedida] = useState()
    

    useEffect(
        () => {
            Axios.get(`http://localhost:3006/aluno/${id}/medidas`)
                .then((response) => {
                    getMedidaData(response.data.medidas)
                })
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])


    const getMedidaData = async () => {
        let response = await getMedida(id);
        setListMedida(response.data.medidas)
        console.log(response.data.medidas)
    }

    return (
        <>
            {typeof listMedida !== "undefined" &&
                listMedida.map((medida) => {
                    return <Ficha
                        key={medida.id_medida}
                        ListMedida={listMedida}
                        setListMedidas={setListMedida}
                        nome={aluno.nome}
                        nascimento={aluno.dt_nascimento}
                        sexo={aluno.sexo}
                        email={aluno.email}
                        celular={aluno.celular}
                        id={medida.id_medida}
                        aluno={medida.alunoID}
                        peso={medida.peso}
                        altura={medida.altura}
                        IMC={medida.IMC}
                        gc_total={medida.gc_total}
                        gc_braco_e={medida.gc_braco_e}
                        gc_braco_d={medida.gc_braco_d}
                        gc_perna_e={medida.gc_perna_e}
                        gc_perna_d={medida.gc_perna_d}
                        gc_tronco={medida.gc_tronco}
                        mm_total={medida.mm_total}
                        mm_braco_e={medida.mm_braco_e}
                        mm_braco_d={medida.mm_braco_d}
                        mm_perna_e={medida.mm_perna_e}
                        mm_perna_d={medida.mm_perna_d}
                        mm_tronco={medida.mm_tronco}
                        massa={medida.massa}
                        gordura={medida.gordura}
                        agua={medida.agua}
                        constituicao={medida.constituicao}
                        i_metabolica={medida.i_metabolica}
                        TMB={medida.TMB}
                        dia={medida.data_medida}
                    />
                })
            }
        </>
    )
}

export default Fichas