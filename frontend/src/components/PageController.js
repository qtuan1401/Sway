import React, { useState, useEffect } from 'react'

import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import OurModelPage from './pages/OurModelPage'
import AboutUsPage from './pages/AboutUsPage'

const PageController = ({activePage, activePageStateHandler}) => {
    const [inputActiveState, setInputActiveState] = useState()
    const [urlBoxText, setUrlBoxText] = useState()
    const [textBoxText, setTextBoxText] = useState()
    const [politicalData, setPoliticalData] = useState()
    const [qualityData, setQualityData] = useState()
    const [genderData, setGenderData] = useState()
    const [overall, setOverall] = useState(0)

    const handleSubmitButtonClickEvent = () => {
        if(inputActiveState == 1) {
            queryNyckelPolitical(urlBoxText)
            queryNyckelQuality(urlBoxText)
            queryNyckelGender(urlBoxText)
            calculateOverall()
            activePageStateHandler(1)
        } else if(inputActiveState == 2) {
            queryNyckelPolitical(textBoxText)
            queryNyckelQuality(textBoxText)
            queryNyckelGender(textBoxText)
            calculateOverall()
            activePageStateHandler(1)
        }
    }

    const queryNyckelPolitical = (str) => {
        // Query code here for political bias
        setPoliticalData(30) // Temporary test code, delete when possible
    }

    const queryNyckelQuality = (str) => {
        // Query code here for data quality/reliability
        setQualityData(50) // Temporary test code, delete when possible
    }

    const queryNyckelGender = (str) => {
        // Query code here for gender bias
        setGenderData(90) // Temporary test code, delete when possible
    }

    const calculateOverall = () => {
        // Logic to convert the three items above to an overall score to be placed here
        setOverall(30) // Temporary test code, delete when possible
    }

    if(activePage == 0) {
        return(
            <div className="homePageContainer">
                <HomePage 
                    submitHandler={handleSubmitButtonClickEvent}
                    inputStateChangeHandler={setInputActiveState}
                    parentUrlBoxStateSetter={setUrlBoxText}
                    parentTextBoxStateSetter={setTextBoxText}
                />
            </div>
        )
    } else if(activePage == 1) {
        return(
            <div className="resultsPageContainer">
                <ResultsPage 
                    one={{
                        header: "Political Bias", 
                        description: "The degree to which the text provided seems to be directed towards a specific political ideology. The bar below, respresents which side the data was evaluated by a neural network as being closer towards.", 
                        leftLabel: "Left", 
                        rightLabel: "Right", 
                        barPercent: `${politicalData}%`
                    }} 
                    two={{
                        header: "Gender Bias", 
                        description: "The degree to which the text provided seems to be aimed towards a specific gender. The bar below, represents which gender (if any) we have predicted to be the primary audience of the text. It's position is proportional to the confidence of the neural network in the result.", 
                        leftLabel: "Male", 
                        rightLabel: "Female", 
                        barPercent: `${genderData}%`
                    }} 
                    three={{
                        header: "Data Reliability", 
                        description: "Sample Description", 
                        leftLabel: "Left", 
                        rightLabel: "Right", 
                        barPercent: `${qualityData}%`
                    }}
                    overall={{
                        header: "Overall",
                        description: "Sample Description",
                        percent: overall
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