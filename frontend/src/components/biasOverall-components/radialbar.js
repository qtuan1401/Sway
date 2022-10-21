import Chart from 'react-apexcharts'
import React, {useState, useEffect} from 'react'

// Only the series prop should be changed.
// Font will need to be changed to comfortaa at some point for consistency

const RadialBar = ({percent}) => {
    console.log(percent);
    const [barState, setBarState] = useState({
        options: {
            chart: {
                height: 280,
                type: "radialBar",
                fontFamily: 'ComfortaaReg',
            },
            stroke: {
                lineCap: "round",
            },
            states: {
                hover: {
                    filter: {
                        type: 'none',
                    }
                },
            },
            colors: ["#6DA3E3"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 15,
                        size: "52%"
                    },
                    track: {
                        background: ["#D3E8FF"],
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            color: "#111",
                            fontSize: "40px",
                            fontWeight: 'lighter', 
                            show: true
                        }
                    }
                }
            },
        }
    })

    console.log(barState.series);

    return(
        <div className='chart'>
            <div className='row'>
                <div className='mixed-chart'>
                    <Chart
                        options={barState.options}
                        series={[percent]}
                        type="radialBar"
                        width="400"
                    />
                </div>
            </div>
        </div>
    )
}

export default RadialBar;