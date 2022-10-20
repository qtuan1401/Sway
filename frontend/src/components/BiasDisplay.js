import React, {useState} from 'react'
import PresenceBar from './biasDisplay-components/presenceBar.js'
import DiscreteBar from './biasDisplay-components/discreteBar.js'
import './styles/BiasDisplay.css'

// Bias Display Component to be used on the result display page

// Prop Descriptions:
// headerText - Heading at the top of each display tile
// description - Description underneath heading on each display tile
// leftLabel - The label that will be under the left side of the bar
// rightLabel - The label that will be under the right side of the bar
// barPercent - The bar percent prop will be passed through this component to the progressBar component to determine the state of the bar. It's value must be given in the "x%" format with quotation marks.


const BiasDisplay = ({header, description, leftLabel, rightLabel, barPercent, value, confidence}) => {
    const [barState, setBarState] = useState(barPercent)

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
                            <DiscreteBar value={-1} confidence={0.5}/>
                        </tr>
                        <tr className="discreteBarLabels">
                            <td className='discreteBarLeftLabel'>
                                Left
                            </td>
                            <td className='discreteBarRightLabel'>
                                Right
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="confidenceBarContainer">
                    <p className="confidenceBarHeader">Confidence (%)</p>
                    <table className="confidenceBarTable">
                        <tr>
                            <PresenceBar presence={barState}/>
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
}

export default BiasDisplay;