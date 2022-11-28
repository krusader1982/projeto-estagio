import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Medida from '../Medida/Medida'


export const getMedidas = async () => {
    try {
        return await Axios.get('http://localhost:3006/listar-medidas');
    } catch (error) {
        console.log('Error while calling getUsers api', error.message);
    }
}

export const getMedida = async (data) => {
    try {
        return await Axios.get(`http://localhost:3006/aluno/${data}/medidas`);
    } catch (error) {
        console.log('Error while calling getUser api', error.message);

    }
}


function Medidas() {
    //const [medidas, setMedidas] = useState([]);
    const [listMedidas, setListMedidas] = useState();
    console.log(listMedidas)

    useEffect(() => {
        Axios.get("http://localhost:3006/listar-medidas")
            .then((response) => {
                setListMedidas(response.data.medidas)
            })
    }, [])

    
    return (
        <>
            {typeof listMedidas !== "undefined" &&
                listMedidas.map((medida) => {
                    return <Medida
                        key={medida.id_medida}
                        ListMedidas={listMedidas}
                        setListMedidas={setListMedidas}
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

export default Medidas