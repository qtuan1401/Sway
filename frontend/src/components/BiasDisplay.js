import React, {useEffect, useState} from 'react'
import PresenceBar from './biasDisplay-components/presenceBar.js'
import DiscreteBar from './biasDisplay-components/discreteBar.js'
import './styles/BiasDisplay.css'

// Bias Display Component to be used on the result display page

// Prop Descriptions:
// headerText - Heading at the top of each display tile
// description - Description underneath heading on each display tile
// leftLabel - The label that will be under the left side of the bar
// rightLabel - The label that will be under the right side of the bar
// value - A discrete value between -1 and 1 where -1 indicates the bar to move left and 1 moves it right. 0 keeps it in the center
// confidence - This value is used to determine the value of the confidence bar and the magnitude to which the discrete bar shifts left or right
// rightLabelOffset - An offset value that helps position the right label to prevent it from being misaligned with the bar


const BiasDisplay = ({header, description, leftLabel, rightLabel, value, confidence, rightLabelOffset}) => {
    const [discreteBarValue, setDiscreteBarValue] = useState(value)
    const [barConfidence, setBarConfidence] = useState(confidence)

    useEffect(() => {
        setDiscreteBarValue(value)
        setBarConfidence(confidence)
    }, [value, confidence])

    return (
        <div className="biasDisplay">
            <p className="boxHeader">{header}</p>
            <div className="descriptionBox">
                {description}
            </div>
            <div className="results">
                <div className="discreteBarContainer">
                    <p className="discreteBarHeader">Result</p>
                    <table className="discreteBarTable">
                        <tr>
                            <DiscreteBar value={discreteBarValue} confidence={barConfidence}/>
                        </tr>
                        <tr className="discreteBarLabels">
                            <td className='discreteBarLeftLabel'>
                                {leftLabel}
                            </td>
                            <td className='discreteBarRightLabel' style={{paddingLeft: `${274 - rightLabelOffset}px`}}>
                                {rightLabel}
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="confidenceBarContainer">
                    <p className="confidenceBarHeader">Confidence (%)</p>
                    <table className="confidenceBarTable">
                        <tr>
                            <PresenceBar presence={(confidence*100)+"%"}/>
                        </tr>
                        <tr className="confidenceBarLabels">
                            <td className='confidenceBarLeftLabel'>
                                0
                            </td>
                            <td className='confidenceBarRightLabel'>
                                100
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

BiasDisplay.defaultProps = {
    headerText: 'Bias Type',
    desc: "This is the description box. The information in this box is a brief description of the bias in question. The borders of the div that manages this text, can be altered in BiasDisplay.css",
    leftLabel: "Left Label",
    rightLabel: "Right Label",
    rightLabelOffset: 0
}

export default BiasDisplay;