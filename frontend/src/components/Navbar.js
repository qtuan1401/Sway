import React, { useState } from 'react'

import './styles/Navbar.css'
import Button from './navbar-components/Button'
import logoHome from './navbar-components/button-icons/home.png'
import logoMoreInfo from './navbar-components/button-icons/moreinfo.png'
import logoOurModel from './navbar-components/button-icons/ourmodel.png'
import logoShare from './navbar-components/button-icons/share.png'

const Navbar = () => {
    const [B1active, setB1Active] = useState(false);
    const [B2active, setB2Active] = useState(false);
    const [B3active, setB3Active] = useState(false);
    const [B4active, setB4Active] = useState(false);

    const handleClickB1 = () => {
        setB1Active(true);
        setB2Active(false);
        setB3Active(false);
        setB4Active(false);
    }

    const handleClickB2 = () => {
        setB1Active(false);
        setB2Active(true);
        setB3Active(false);
        setB4Active(false);
    }

    const handleClickB3 = () => {
        setB1Active(false);
        setB2Active(false);
        setB3Active(true);
        setB4Active(false);
    }

    const handleClickB4 = () => {
        setB1Active(false);
        setB2Active(false);
        setB3Active(false);
        setB4Active(true);
    }

    return (
        <div className="navbarContainer">
            <div className="buttonOne">
                <Button active={B1active} onClick={handleClickB1} logo={logoHome} logoXOffset={10} logoYOffset={10}/>
            </div>
            <div className="buttonTwo">
                <Button active={B2active} onClick={handleClickB2} logo={logoOurModel} logoXOffset={10} logoYOffset={10}/>
            </div>
            <div className="buttonThree">
                <Button active={B3active} onClick={handleClickB3} logo={logoMoreInfo} logoXOffset={12} logoYOffset={9}/>
            </div>
            <div className="buttonFour">
                <Button active={B4active} onClick={handleClickB4} logo={logoShare} logoXOffset={16} logoYOffset={10}/>
            </div>
        </div>
    )
}

export default Navbar;