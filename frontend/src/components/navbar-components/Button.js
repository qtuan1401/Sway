import React from 'react'
import './Button.css'

// Button Component to be used with Navigation Bar component

// Prop Descriptions:
// active - Boolean to determine if the button belongs to currently active page
// logo - Determines the logo present on the button
// onClick - Passes the event handling function from Navbar component to this one
// logoXOffset - x-axis offset of logo image (useful for fine-tuning logo position)
// logoYOffset - y-axis offset of logo image (useful for fine-tuning logo position)

const Button = ({active, logo, onClick, logoXOffset, logoYOffset}) => {
    return (
        <div onClick={onClick} style={{ backgroundColor: active ? '#D3E8FF':'#A1C5EF' }} className="navbarButton">
            <img src={logo} style={{marginLeft: logoXOffset, marginTop: logoYOffset}}/>
        </div>
    )
}

Button.defaultProps = {
    active: false,
    logoXOffset: 0,
    logoYOffset: 0
}

export default Button;