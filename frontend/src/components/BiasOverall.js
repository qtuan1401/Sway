import './styles/BiasOverall.css'
import Chart from 'react-apexcharts'
import RadialBar from './biasOverall-components/radialbar.js'

const BiasOverall = ({header, desc}) => {
    return (
        <div className="BiasOverallContainer">
            <div className="overallBoxHeader">
                {header}
            </div>
            <div className="overallDescriptionBox">
                {desc}
            </div>
            <div className="radialbar">   
                <RadialBar/>
            </div>
        </div>
    )
}

BiasOverall.defaultProps = {
    header: 'Overall Result',
    desc: "This is the description box. The information in this box is an overall description of the biases discovered. It should reflect somewhat on the totality of bias present in the text. The borders of the div that manages this text, can be altered in BiasOverall.css"
}

export default BiasOverall;