import './styles/BiasOverall.css'
import React, { useState, useEffect } from 'react'
import RadialBar from './biasOverall-components/radialbar.js'

// Prop Descriptions:
// header - Heading at the top tile
// description - Description underneath heading on tile
// percent - The label and percentage of the radial bar

const BiasOverall = ({header, description, percent}) => {
    const [percentState, setPercentState] = useState(percent)

    return (
        <div className="BiasOverallContainer">
            <div className="overallBoxHeader">
                {header}
            </div>
            <div className="overallDescriptionBox">
                {description}
            </div>
            <div className="radialbar">  
                <RadialBar percent={percentState}/>
            </div>
        </div>
    )
}

BiasOverall.defaultProps = {
    header: 'Overall Result',
    desc: "This is the description box. The information in this box is an overall description of the biases discovered. It should reflect somewhat on the totality of bias present in the text. The borders of the div that manages this text, can be altered in BiasOverall.css"
}

export default BiasOverall;