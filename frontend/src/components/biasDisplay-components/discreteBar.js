import React, { useState, useEffect } from 'react'
import './styles/discreteBar.css'

// Bias Display Component to be used on the result display page

// Prop Descriptions:
// value - describes the direction the bar moves in
// confidence - magnitude of movement in either direction

const DiscreteBar = ({value, confidence}) => {
    const [barPos, setBarPos] = useState(35);

    useEffect(() => {
        if(value === 1 || value === -1) {
            setBarPos(100 * (1 - confidence))
        }
    }, [value, confidence])
    console.log(value, confidence, barPos);
    if(value === 0) {
        return (
            <div className="discreteBarBG">
                <div className="discreteBar" style={{width: "30%", marginLeft: `${barPos}%`}}>
                </div>
            </div>
        )
    } else if(value === 1) {
        return (
            <div className="discreteBarBG">
                <div className="discreteBar" style={{width: "30%", marginLeft: `${barPos}%`, marginRight: 'auto'}}>
                </div>
            </div>
        )
    } else if(value === -1) {
        return (
            <div className="discreteBarBG">
                <div className="discreteBar" style={{width: "30%", marginRight: `${barPos}%`, marginLeft: 'auto'}}>
                </div>
            </div>
        )
    }
}

export default DiscreteBar;