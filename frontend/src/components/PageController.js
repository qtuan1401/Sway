import React, { useState, useEffect } from 'react'

import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import OurModelPage from './pages/OurModelPage'
import AboutUsPage from './pages/AboutUsPage'
import LinksPage from './pages/LinksPage'

// Prop Descriptions:
// activePage - This prop contains the active page as determined by the navbar component
// activePageStateHandler - A pointer function that points to a handler in the parent component that allows the pages to change.

const PageController = ({activePage, activePageStateHandler}) => {
    const [inputActiveState, setInputActiveState] = useState()
    const [urlBoxText, setUrlBoxText] = useState()
    const [textBoxText, setTextBoxText] = useState()
    const [politicalData, setPoliticalData] = useState()
    const [qualityData, setQualityData] = useState()
    const [genderData, setGenderData] = useState()
    const [genderConfidence, setGenderConfidence] = useState(0)
    const [politicalConfidence, setPoliticalConfidence] = useState(0)
    const [qualityConfidence, setQualityConfidence] = useState(0)
    const [overall, setOverall] = useState(0)
    const [progress, setProgress] = useState(0);

    const handleSubmitButtonClickEvent = async () => {
        await fetch('https://www.nyckel.com/connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'client_id=nyp7aqerzzvlegnngu937tbpb0tcmrij&client_secret=zznj7bxwmelf3zdbmre1esxtmzvax157hblet3g4wcht8wmcmhqudg572tw7fmyk&grant_type=client_credentials'
        })
        .then(response => response.json())
        .then(token => {
            console.log(token.access_token)
            if(inputActiveState == 1) {
                fetch('http://localhost:5000/url', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {"url": urlBoxText}
                    )
                })
                .then(response => response.json())
                .then(data => {
                    beginCascadeToResults(data.bodyText, token.access_token)
                });
            } else if(inputActiveState == 2) {
                beginCascadeToResults(textBoxText, token.access_token)
            }
        });
    }

    const beginCascadeToResults = async (str, token) => {
        // Query code here for political bias
        console.log("POLITICAL QUERY")
        await fetch('https://www.nyckel.com/v1/functions/fdcyy6xp6ito24tn/invoke', {
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
        .then(data => {
            console.log(data)
            if(data.labelName == "Left") {
                setPoliticalData(-1)
            } else if(data.labelName == "Central") {
                setPoliticalData(0)
            } else if(data.labelName == "Right") {
                setPoliticalData(1)
            }
            setPoliticalConfidence(data.confidence)
        }).then((val) => {
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
            .then(data => {
                console.log(data);
                if(data.labelName == "Low") {
                    setQualityData(-1)
                } else if(data.labelName == "Medium") {
                    setQualityData(0)
                } else if(data.labelName == "High") {
                    setQualityData(1)
                }
                setQualityConfidence(data.confidence)
            }).then((val) => {
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
                .then(data => {
                    console.log(data)
                    if(data.labelName == "Male") {
                        setGenderData(-1)
                    } else if(data.labelName == "Female") {
                        setGenderData(1)
                    }
                    setGenderConfidence(data.confidence)
                }).then((final) => {
                    activePageStateHandler(1)
                    // calculateOverall()
                })
            })
        });
    }

    const calculateOverall = () => {
        var tempPoliticalVal
        var tempGenderVal
        var tempQualityVal
        var temp

        // The purpose of the calculation below is to ensure that any swing towards either side of the bar
        // will negatively influence the overall.
        console.log(politicalConfidence);
        if(politicalData == 1 || politicalData == -1) {
            tempPoliticalVal = 50 + (50 * politicalConfidence)
        } else if(politicalData == 0) {
            tempPoliticalVal = 50 - (50 * politicalConfidence)
        }

        // The purpose of the calculation below is to ensure that any swing towards either side of the bar
        // will negatively influence the overall.
        tempGenderVal = 100 * genderConfidence
        
        // The purpose of the calculation below for effective data reliability/quality is to
        // use this value as a weight while calculating the overall.
        if(qualityData == 1) {
            tempQualityVal = 50 + (50 * qualityConfidence)
        } else if(qualityData == 0) {
            tempQualityVal = 50
        } else if(qualityData == -1) {
            tempQualityVal = 50 - (50 * qualityConfidence)
        }
        temp = ((tempPoliticalVal + tempGenderVal) * (tempQualityVal / 100)) / 200
        console.log("TEMP POL: " + tempPoliticalVal) // Temporary testing
        console.log("TEMP QUAL: " + tempQualityVal) // Temporary testing
        console.log("TEMP GEN: " + tempGenderVal) // Temporary testing
        console.log(Math.round(temp*100)) // Temporary testing
        setOverall(Math.round(temp*100))
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
        console.log("POL " + politicalData)
        console.log("GEN " + genderData)
        console.log("QUAL " + qualityData)
        return(
            <div className="resultsPageContainer">
                <ResultsPage 
                    one={{
                        header: "Political Bias", 
                        description: "The degree to which the text provided seems to be directed towards a specific political ideology. The bar below, respresents which side the data was evaluated by a neural network as being closer towards.", 
                        leftLabel: "Left", 
                        rightLabel: "Right",
                        value: politicalData,
                        confidence:  politicalConfidence
                    }} 
                    two={{
                        header: "Gender Bias", 
                        description: "The degree to which the text provided seems to be aimed towards a specific gender. The bar below, represents which gender (if any) we have predicted to be the primary audience of the text.", 
                        leftLabel: "Male", 
                        rightLabel: "Female",
                        value: genderData,
                        confidence:  genderConfidence,
                        rightLabelOffset: 20
                    }} 
                    three={{
                        header: "Data Reliability", 
                        description: "The degree to which the text provided seems to be reliable. This is a measure of the presense or lack thereof of misinformation and fact driven journalism. More information can be found in the Our Model page.", 
                        leftLabel: "Low",
                        rightLabel: "High",
                        value: qualityData,
                        confidence:  qualityConfidence
                    }}
                    overall={{
                        header: "Overall",
                        description: "The overall bias of the text is determined as a function of the political/gender bias, data reliability and the confidence that the neural network has in the evaluation returned. The purpose of this value is to provide a general idea of the degree to which a text seems to be addressing a marginal viewpoint. It should be noted that this value does not in any way, indicate malicious intent on behalf of the author, as entirely factual journalism could still be detected to be addressing a specific audience.",
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