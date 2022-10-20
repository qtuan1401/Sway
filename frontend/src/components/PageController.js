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
    const [genderConfidence, setGenderConfidence] = useState()
    const [politicalConfidence, setPoliticalConfidence] = useState()
    const [qualityConfidence, setQualityConfidence] = useState()
    const [overall, setOverall] = useState(0)
    const [accessToken, setAccessToken] = useState()

    const handleSubmitButtonClickEvent = () => {
        fetch('https://www.nyckel.com/connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'client_id=nyp7aqerzzvlegnngu937tbpb0tcmrij&client_secret=zznj7bxwmelf3zdbmre1esxtmzvax157hblet3g4wcht8wmcmhqudg572tw7fmyk&grant_type=client_credentials'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.access_token)
            if(inputActiveState == 1) {
                queryNyckelPolitical(urlBoxText, data.access_token)
                queryNyckelQuality(urlBoxText, data.access_token)
                queryNyckelGender(urlBoxText, data.access_token)
                calculateOverall()
                activePageStateHandler(1)
            } else if(inputActiveState == 2) {
                queryNyckelPolitical(textBoxText, data.access_token)
                queryNyckelQuality(textBoxText, data.access_token)
                queryNyckelGender(textBoxText, data.access_token)
                calculateOverall()
                activePageStateHandler(1)
            }
        });
    }

    const queryNyckelPolitical = (str, token) => {
        // Query code here for political bias
        console.log("POLITICAL QUERY")
        fetch('https://www.nyckel.com/v1/functions/fdcyy6xp6ito24tn/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {"data": str}
            )
        })
        .then(response => response.json())
        .then(data => console.log(data));
        setPoliticalData(30) // Temporary test code, delete when possible
    }

    const queryNyckelQuality = (str, token) => {
        // Query code here for data quality/reliability
        console.log("QUALITY QUERY")
        fetch('https://www.nyckel.com/v1/functions/mtti3fgv03vtl07p/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {"data": str}
            )
        })
        .then(response => response.json())
        .then(data => console.log(data));
        setQualityData(50) // Temporary test code, delete when possible
    }

    const queryNyckelGender = (str, token) => {
        // Query code here for gender bias
        console.log("GENDER QUERY")
        fetch('https://www.nyckel.com/v1/functions/ky72dde3ymqe0s4w/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {"data": str}
            )
        })
        .then(response => response.json())
        .then(data => console.log(data));
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