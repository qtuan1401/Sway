import React, {useState} from 'react'
import PresenceBar from './biasDisplay-components/presenceBar.js'
import './BiasDisplays.css'

// Bias Display Component to be used on the result display page

// Prop Descriptions:
// headerText - Heading at the top of each display tile
// desc - Description underneath heading on each display tile
// leftLabel - The label that will be under the left side of the bar
// rightLabel - The label that will be under the right side of the bar
// barPercent - The bar percent prop will be passed through this component to the progressBar component to determine the state of the bar.


const BiasDisplay = ({headerText, desc, leftLabel, rightLabel, barPercent}) => {
    const [barState, setBarState] = useState(barPercent)

    return (
        <div className="biasDisplay">
            <p className="boxHeader">{headerText}</p>
            <div className="descriptionBox">
                {desc}
            </div>
            <div className="results">
                <p className="resultHeader">Presense in text:</p>
                <table className="resultBoxFrame">
                    <tr className="presenceBarBox">
                        <PresenceBar presence={barState}/>
                    </tr>
                    <tr className="labelBox">
                        <td className="leftLabelBox">
                            {leftLabel}
                        </td>
                        <td className="rightLabelBox">
                            {rightLabel}
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

BiasDisplay.defaultProps = {
    headerText: 'Bias Type',
    desc: "This is the description box. The information in this box is a brief description of the bias in question. The borders of the div that manages this text, can be altered in BiasDisplay.css",
    leftLabel: "Left Label",
    rightLabel: "Right Label"
}

export default BiasDisplay;