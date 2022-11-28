import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios'
import Chart from 'react-apexcharts';


const Sparklines = () => {

  const { id } = useParams();
  const [series, setSeries] = useState();
  const [date, setDate] = useState([]);
  const [x, setX] = useState("Selecione a data");
  const [options, setObject] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['% de Água'],
  },
  )
  const handleChange = (e) => {
    setX(e.target.value);
    const data = e.target.value
    console.log(data);
  };

  useEffect(() => {
    const medida = [];
    const agua = [];

    Axios.get(`http://localhost:3006/aluno/${id}/agua`).then(response => {
      //console.log("response", response)
      response.data.medidas.map(item => {
        console.log("item",item)        
        medida.push(item.data_medida)
        agua.push(item.agua)
      })
      setObject(
        {
          chart: {
            height: 350,
            type: 'radialBar',
            toolbar: {
              show: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
      
              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val);
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['% de Água'],
        },        
      )
      setSeries(
        agua
      )
      setDate(
        medida
      )

    }).catch(e => {
      alert(e);
    })
  }, [id])


  console.log()

  return (
    <div>
      
      <h1>{x} </h1>
      <select onChange={(e) => handleChange(e)}>
        <option value="">Selecione </option>
        {
          date.map((item, index) => <option key={index} value={item} >{item} </option>)
        }
      </select>
      <React.Fragment>            
            <div>
                <Chart
                    type='radialBar'
                    width={200}
                    height={200}
                    series={series}
                    options={options}
                >
                </Chart>
            </div>
        </React.Fragment>
    </div>
  )
}

export default Sparklines