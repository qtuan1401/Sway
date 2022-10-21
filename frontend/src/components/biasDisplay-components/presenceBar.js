import React, { useState, useEffect } from 'react'
import './styles/presenceBar.css'

// Bias Display Component to be used on the result display page

// Prop Descriptions:
// presence - prop passed from other components that describes this component's state

const PresenceBar = ({presence}) => {
    return (
        <div className="presenceBarBG">
            <div style={{width: presence}}>
                <div className="presenceBarPresence">
                </div>
            </div>
        </div>
    )
}

export default PresenceBar;