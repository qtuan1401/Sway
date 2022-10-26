import React, { useState } from 'react'

import './styles/Navbar.css'
import Button from './navbar-components/Button'
import PageController from './PageController'
import logoHome from './navbar-components/button-icons/home.png'
import logoMoreInfo from './navbar-components/button-icons/moreinfo.png'
import logoOurModel from './navbar-components/button-icons/ourmodel.png'
import logoShare from './navbar-components/button-icons/share.png'
import Loading from './Loading'

import { Link, useLocation  } from "react-router-dom";
import * as ROUTES from "../routes/paths";

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
    const location = useLocation()
    const pathname = location.pathname;
    // console.log(pathname);
    return (
        <div className='navbar'>
            <div className="navbarContainer">
                <Link className="buttonOne" to={ROUTES.HOMEPAGE}>
                    <Button active={pathname === ROUTES.HOMEPAGE} logo={logoHome} logoXOffset={10} logoYOffset={10}/>
                </Link>
                <Link className="buttonTwo" to={ROUTES.MODEL_PAGE}>
                    <Button active={pathname === ROUTES.MODEL_PAGE} logo={logoOurModel} logoXOffset={10} logoYOffset={10}/>
                </Link>
                <Link className="buttonThree" to={ROUTES.ABOUT_US_PAGE}>
                    <Button active={pathname === ROUTES.ABOUT_US_PAGE} logo={logoMoreInfo} logoXOffset={12} logoYOffset={9}/>
                </Link>
                <Link className="buttonFour" to={ROUTES.LINKS_PAGE}>
                    <Button active={pathname === ROUTES.LINKS_PAGE} logo={logoShare} logoXOffset={16} logoYOffset={10}/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;