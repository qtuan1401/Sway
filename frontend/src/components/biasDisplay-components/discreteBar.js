import React, { useState, useEffect } from 'react'
import './styles/discreteBar.css'

// Bias Display Component to be used on the result display page

// Prop Descriptions:
// value - describes the direction the bar moves in
// confidence - magnitude of movement in either direction

const DiscreteBar = ({value, confidence}) => {
    const [barPos, setBarPos] = useState(124)
    const offsetToCenter = 124

    useEffect(() => {
        if(value == 1 || value == -1) {
            setBarPos(offsetToCenter + (124*confidence))
        }
    }, [])

    if(value == 0) {
        return (
            <div className="discreteBarBG">
                <div className="discreteBar" style={{width: "97px", left:`${barPos}px`}}>
                </div>
            </div>
        )
    } else if(value == 1) {
        return (
            <div className="discreteBarBG">
                <div className="discreteBar" style={{width: "97px", left:`${barPos}px`}}>
                </div>
            </div>
        )
    } else if(value == -1) {
        return (
            <div className="discreteBarBG">
                <div className="discreteBar" style={{width: "97px", right:`${barPos}px`}}>
                </div>
            </div>
        )
    }
}

export default DiscreteBar;