import React, { useState } from 'react'

import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import OurModelPage from './pages/OurModelPage'
import AboutUsPage from './pages/AboutUsPage'

const PageController = ({activePage}) => {
    const handleSubmitButtonClickEvent = () => {
        // Code to handle submit button click
    }

    if(activePage == 0) {
        return(
            <div className="homePageContainer">
                <HomePage submitHandler={handleSubmitButtonClickEvent}/>
            </div>
        )    
    } else if(activePage == 1) {
        return(
            <div className="resultsPageContainer">
                <ResultsPage 
                    one={{
                        header: "One", 
                        description: "Sample Description", 
                        leftLabel: "Left", 
                        rightLabel: "Right", 
                        barPercent: "30%"
                    }} 
                    two={{
                        header: "Two", 
                        description: "Sample Description", 
                        leftLabel: "Left", 
                        rightLabel: "Right", 
                        barPercent: "50%"
                    }} 
                    three={{
                        header: "Three", 
                        description: "Sample Description", 
                        leftLabel: "Left", 
                        rightLabel: "Right", 
                        barPercent: "90%"
                    }}
                    overall={{
                        header: "Overall",
                        description: "Sample Description",
                        percent: 48
                    }}
                />
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