import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from 'react-apexcharts';
import Axios from 'axios'



const GorduraCorporal = () => {

    const { id } = useParams();

    const [series, setSeries] = useState(
        [
            {
                name: 'Braço E',
                data: []
            }, {
                name: 'Braço D',
                data: []
            }, {
                name: 'Perna E',
                data: []
            }, {
                name: 'Perna D',
                data: []
            }, {
                name: 'Tronco',
                data: []
            }],
    );    

    const [options, setObject] = useState({
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: '% Gordura Corporal'
        },
        xaxis: {
            categories: [],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
        fill: {
            opacity: 1

        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        },
    }
    )

    useEffect(() => {
        const tronco = [];
        const braco_d = [];
        const perna_d = [];
        const braco_e = [];
        const perna_e = [];
        const medida=[];

        Axios.get(`http://localhost:3006/aluno/${id}/medidas`).then(response => {
            //console.log("response", response)
            response.data.medidas.map(item=>{
                //console.log("item",item)
                tronco.push(item.gc_tronco)
                braco_d.push(item.gc_braco_d)
                perna_d.push(item.gc_perna_d)
                braco_e.push(item.gc_braco_e)
                perna_e.push(item.gc_perna_e)
                medida.push(item.data_medida)                
            })
            setObject(
                {
                    chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        },
                    },
                    stroke: {
                        width: 1,
                        colors: ['#fff']
                    },
                    title: {
                        text: '% Gordura Corporal'
                    },
                    xaxis: {
                        categories: medida,
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + "%"
                            }
                        }
                    },
                    fill: {
                        opacity: 1
            
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                },
            )
            setSeries(
                [{
                    name: 'Braço E',
                    data: braco_e
                }, {
                    name: 'Braço D',
                    data: braco_d
                }, {
                    name: 'Perna E',
                    data: perna_e
                }, {
                    name: 'Perna D',
                    data: perna_d
                }, {
                    name: 'Tronco',
                    data: tronco
                }],
            )
            console.log("aki", tronco,braco_e,medida)
        }).catch(e=> {
            alert(e);
        })
    },[id])

    return (<React.Fragment>

        <div>
            <Chart type='bar'            
                width={500}
                height={250}
                stacked='true'                
                series={series}
                options={options}
            >
            </Chart>
        </div>

    </React.Fragment>);
}

export default GorduraCorporal