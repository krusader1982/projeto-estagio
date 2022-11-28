import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from 'react-apexcharts';
import Axios from 'axios'



const Peso = () => {

    const { id } = useParams();

    const [options, setObject] = useState(
        {
            chart: {
                height: 350,
                type: 'area',
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                type: 'solid',
                opacity: [0.35, 1],
            },
            labels: ['DEZ', 'MAR', 'JUN', 'AGO'],
            markers: {
                size: 0
            },
            yaxis: [
                {
                    title: {
                        text: 'Peso',
                    },
                },
            ],
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " Kg";
                        }
                        return y;
                    }
                }
            }
        },
    )

    const [series, setSeries] = useState(
        [{
            name: 'Aluno',
            type: 'line',
            data: []
        }],
    )

    useEffect(() => {
        const peso = [];
        const medida=[];

        Axios.get(`http://localhost:3006/aluno/${id}/medidas`).then(response => {
            console.log("response", response)
            response.data.medidas.map(item=>{
                console.log("item",item)
                peso.push(item.peso)
                medida.push(item.data_medida)                
            })
            setObject(
                {
                    chart: {
                        height: 350,
                        type: 'area',
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    fill: {
                        type: 'solid',
                        opacity: [0.35, 1],
                    },
                    labels: medida,
                    markers: {
                        size: 0
                    },
                    yaxis: [
                        {
                            title: {
                                text: 'Peso',
                            },
                        },
                    ],
                    tooltip: {
                        shared: true,
                        intersect: false,
                        y: {
                            formatter: function (y) {
                                if (typeof y !== "undefined") {
                                    return y.toFixed(0) + " Kg";
                                }
                                return y;
                            }
                        }
                    }
                },
            )
            setSeries(
                [{
                    name: 'Aluno',
                    type: 'line',
                    data: peso
                }],
            )
            console.log("peso", peso,medida)
        }).catch(e=> {
            alert(e);
        })
    },[id])

    

        return (

            <React.Fragment>

                <div className="graph">
                    <div>Peso</div>
                    <Chart type='area'
                        width={500}
                        height={250}
                        series={series}
                        options={options}
                    >
                    </Chart>
                </div>

            </React.Fragment>)

    
        }
export default Peso