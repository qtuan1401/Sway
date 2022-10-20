import React, { useState, useEffect } from 'react'
import './styles/presenceBar.css'

// Bias Display Component to be used on the result display page

// Prop Descriptions:
// presence - prop passed from other components that describes this component's state

const PresenceBar = ({presence}) => {
    const [presenceState, setPresenceState] = useState(presence);

    useEffect(() => {
        setPresenceState(presence)
    }, [presence])

    return (
        <div className="presenceBarBG">
            <div className="presenceBarPresence" style={{width: presenceState}}>
            </div>
        </div>
    )
}

export default PresenceBar;