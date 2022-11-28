import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { useParams } from "react-router-dom";
import Axios from 'axios'

const IMC = 34.9



const Number = () => {
    return IMC
}

export function getData() {
    return [
        ["Label", "Value"],
        ["IMC", Number()],
    ];
}
export const options = {
    width: 400,
    height: 220,
    greenFrom: 18.5,
    greenTo: 25,
    yellowFrom: 25,
    yellowTo: 30,
    redFrom: 30,
    redTo: 41,
    minorTicks: 10,
    min: 15,
    max: 41
};


const IMC2 = () => {

    const { id } = useParams();
    const [data, setData] = useState(getData);
    const [x, setX] = useState("Selecione a data");
    const [date, setDate] = useState([]);

    useEffect(() => {
        const id = setInterval(() => {
            setData(getData());
        }, 3000);

        return () => {
            clearInterval(id);
        };
    });
    const handleChange = (e) => {
        setX(e.target.value);
        const data = e.target.value
        console.log(data);
    };
    useEffect(() => {
        const medida = [];
        const imc = [];

        Axios.get(`http://localhost:3006/aluno/${id}/imc`).then(response => {
            //console.log("response", response)
            response.data.medidas.map(item => {
                console.log("item", item)
                medida.push(item.data_medida)
                imc.push(item.imc)
            })

            setDate(
                medida
            )

        }).catch(e => {
            alert(e);
        })
    }, [id])

    return (
        <div>

            <h1>{x} </h1>
            <select onChange={(e) => handleChange(e)}>
                <option value="">Selecione </option>
                {
                    date.map((item, index) => <option key={index} value={item} >{item} </option>)
                }
            </select>
            <Chart
                chartType="Gauge"
                width="300px"
                height="200px"
                data={data}
                options={options}
            />
        </div>
    )
}

export default IMC2