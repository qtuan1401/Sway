import React, { useState, useEffect } from 'react'

import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import OurModelPage from './pages/OurModelPage'
import AboutUsPage from './pages/AboutUsPage'
import LinksPage from './pages/LinksPage'

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
                        centerLabel: "Center",
                        rightLabel: "Right",
                        barPercent: `${politicalData}%`,
                        value: 1,
                        confidence:  0.5
                    }} 
                    two={{
                        header: "Gender Bias", 
                        description: "The degree to which the text provided seems to be aimed towards a specific gender. The bar below, represents which gender (if any) we have predicted to be the primary audience of the text.", 
                        leftLabel: "Male", 
                        rightLabel: "Female",
                        barPercent: `${genderData}%`,
                        value: 1,
                        confidence:  0.5
                    }} 
                    three={{
                        header: "Data Reliability", 
                        description: "The degree to which the text provided seems to be reliable. This is a measure of the presense or lack thereof of misinformation and fact driven journalism. More information can be found in the Our Model page.", 
                        leftLabel: "Low",
                        rightLabel: "High",
                        barPercent: `${qualityData}%`,
                        value: -1,
                        confidence:  0.75
                    }}
                    overall={{
                        header: "Overall",
                        description: "The overall bias of the text is determined as a function of the political/gender bias, data reliability and the confidence that the neural network has in the evaluation returned. The purpose of this value is to provide a general idea of the degree to which a text seems to be addressing a marginal viewpoint. It should be noted that this value does not in any way, indicate malicious intent on behalf of the author, as entirely factual journalism could still be detected to be addressing a specific audience.",
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
    } else if(activePage == 4) {
        return(
            <div className="linksPageContainer">
                <LinksPage/>
            </div>
        )
    }
}

export default PageController;