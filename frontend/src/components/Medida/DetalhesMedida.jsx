import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { Link } from 'react-router-dom'
//import { Button } from "@mui/material";
import Axios from 'axios'
import Medida from '../Medida/Medida'

const getMedida = async (data) => {
    try {
        return await Axios.get(`http://localhost:3006/aluno/${data}/medidas`);
    } catch (error) {
        console.log('Error while calling getUser api', error.message);

    }
}

function DetalhesMedida() {

    const [listMedida, setListMedida] = useState()
    const { id } = useParams();

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
    }

    return (
        <>
            {typeof listMedida !== "undefined" &&
                listMedida.map((medida) => {
                    return <Medida
                        key={medida.id_medida}
                        ListMedida={listMedida}
                        setListMedidas={setListMedida}
                        id={medida.id_medida}
                        aluno={medida.alunoID}
                        peso={medida.peso}
                        altura={medida.altura}
                        IMC={medida.IMC}
                        dia={medida.createdAt}
                    />

                })
            }
        </>
    )
}

export default DetalhesMedida;