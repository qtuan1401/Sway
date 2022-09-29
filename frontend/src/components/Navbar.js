import React, { useState } from 'react'

import './styles/Navbar.css'
import Button from './navbar-components/Button'
import PageController from './PageController'
import logoHome from './navbar-components/button-icons/home.png'
import logoMoreInfo from './navbar-components/button-icons/moreinfo.png'
import logoOurModel from './navbar-components/button-icons/ourmodel.png'
import logoShare from './navbar-components/button-icons/share.png'

// Active Page Index
// 0 - Home (Default)
// 1 - Results
// 2 - Our Model
// 3 - About Us
// 4 - N/A

// Active page state deterimed by activePage variable below. Changes to this state can be made
// by pressing buttons on the Navbar. This will change what is rendered on the rest of this page.
// Not the most elegant solution for page changes but it'll do.

const Navbar = () => {
    const [B1active, setB1Active] = useState(true);
    const [B2active, setB2Active] = useState(false);
    const [B3active, setB3Active] = useState(false);
    const [B4active, setB4Active] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const handleClickB1 = () => {
        setB1Active(true);
        setB2Active(false);
        setB3Active(false);
        setB4Active(false);
        // It doesn't make sense to do this. The results page shouldn't be
        // accessible by clicking the home button. I have just left it like this
        // for testing purposes.
        if(activePage == 0) {
            setActivePage(1);
        } else {
            setActivePage(0);
        }
    }

    const handleClickB2 = () => {
        setB1Active(false);
        setB2Active(true);
        setB3Active(false);
        setB4Active(false);
        setActivePage(2);
    }

    const handleClickB3 = () => {
        setB1Active(false);
        setB2Active(false);
        setB3Active(true);
        setB4Active(false);
        setActivePage(3);
    }

    const handleClickB4 = () => {
        setB1Active(false);
        setB2Active(false);
        setB3Active(false);
        setB4Active(true);
        setActivePage(4);
    }

    return (
        <>
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
            <div className="pageContainer">
                <PageController activePage={activePage}/>
            </div>
        </>
    )
}

export default Navbar;