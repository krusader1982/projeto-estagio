import React, { useState } from "react";
import  Chart from 'react-apexcharts';

const IMC = (props) => {
    const [series] = useState([props.IMC]);
    const [options] = useState({
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'colors',
            gradient: {
                type: 'horizontal',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#1eaa59",
                  
                  opacity: 1
                },
                {
                  offset: 20,
                  color: "#9baa1e",
                  
                  opacity: 1
                },
                {
                  offset: 40,
                  color: "#f1c40f",
                  opacity: 1
                },
                {
                  offset: 60,
                  color: "#e67e22",
                  
                  opacity: 1
                },
                {
                    offset: 80,
                    color: "#E84C3D",
                    
                    opacity: 1
                  }
              ]
            },
          },
          labels: ['Average Results'],
        },     
      
    )


  return (
    <React.Fragment>

        <div>
          <div>
            <p>IMC</p>
          </div>
            <Chart type='radialBar'            
                width={200}
                height={250}                
                series={series}
                options={options}
            >
            </Chart>
            
        </div>

    </React.Fragment>)
  
}

export default IMC