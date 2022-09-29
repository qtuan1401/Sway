import React, { useState } from 'react'

import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import OurModelPage from './pages/OurModelPage'
import AboutUsPage from './pages/AboutUsPage'

const PageController = ({activePage}) => {
    if(activePage == 0) {
        return(
            <div className="homePageContainer">
                <HomePage/>
            </div>
        )
    } else if(activePage == 1) {
        return(
            <div className="resultsPageContainer">
                <ResultsPage/>
            </div>
        )
    } else if(activePage == 2) {
        return(
            <div className="ourModelPageContainer">
                <OurModelPage/>
            </div>
        )
    } else if(activePage == 3) {
        return(
            <div className="aboutUsPageContainer">
                <AboutUsPage/>
            </div>
        )
    } // Page 4 not added in since we aren't 100% on what it will be
}

export default PageController;