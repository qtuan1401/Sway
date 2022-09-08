import Chart from 'react-apexcharts'
import React, {useState} from 'react'

// Only the series prop should be changed.
// Font will need to be changed to comfortaa at some point for consistency

const RadialBar = ({type, series, width, height, options}) => {
    const [barState, setBarState] = useState({
        options: {
            chart: {
                height: 280,
                type: "radialBar"
            },
            stroke: {
                lineCap: "round",
            },
            colors: ["#6DA3E3"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 15,
                        size: "55%"
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
                            show: true,
                        }
                    }
                }
            },
        },
        series: [67],
      })

    return(
        <div className='chart'>
            <div className='row'>
                <div className='mixed-chart'>
                    <Chart
                        options={barState.options}
                        series={barState.series}
                        type="radialBar"
                        width="400"
                    />
                </div>
            </div>
        </div>
    )
}

export default RadialBar;