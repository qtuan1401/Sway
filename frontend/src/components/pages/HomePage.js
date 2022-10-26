import './styles/HomePage.css'
import React, {useState, useEffect} from 'react'

import UserInputField from '../UserInputField'
import SubmitButton from '../SubmitButton'

import { useNavigate } from "react-router-dom";
import Loading from '../Loading';

// Prop descriptions:
// submitHandler - Points to an event handler function.
// I've done this ^^ so that the event handler can be passed in from
// the page controller component. This allows the page controller to
// determine the switchover to the results page.

const HomePage = ({submitHandler, inputStateChangeHandler, parentUrlBoxStateSetter, parentTextBoxStateSetter}) => {
    const [urlBoxText, setUrlBoxText] = useState("")
    const [textBoxText, setTextBoxText] = useState("")
    const [inputActiveState, setInputActiveState] = useState()
    const [politicalData, setPoliticalData] = useState()
    const [qualityData, setQualityData] = useState()
    const [genderData, setGenderData] = useState()
    const [genderConfidence, setGenderConfidence] = useState(0)
    const [politicalConfidence, setPoliticalConfidence] = useState(0)
    const [qualityConfidence, setQualityConfidence] = useState(0)
    const [overall, setOverall] = useState(0)
    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();

    const handleSubmitButtonClickEvent = async () => {
        setProgress(1);
        await fetch('https://www.nyckel.com/connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            //SECOND ACCOUNT
            body: 'client_id=4idw3amkaejxdukgp39qt9gqmb3a30vr&client_secret=f2eoaz7wpo691lkp9qfpvjbu1n9r6cg9isiagw5qwd0427o0qe0dl6vvqjmnpfpd&grant_type=client_credentials'
            //MARK SUBMITTED ACCOUNT
            //body: 'client_id=nyp7aqerzzvlegnngu937tbpb0tcmrij&client_secret=zznj7bxwmelf3zdbmre1esxtmzvax157hblet3g4wcht8wmcmhqudg572tw7fmyk&grant_type=client_credentials'
        })
        .then(response => response.json())
        .then(token => {
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
        })
    }

    const beginCascadeToResults = async (str, token) => {
        // Query code here for political bias
        //SECOND ACCOUNT
        const finalData = {
            pol: {},
            gen: {},
            qual: {},
        };
        await fetch('https://www.nyckel.com/v1/functions/nes1msf05ge8tex5/invoke', {

        //MARK SUBMITTED ACCOUNT
        //await fetch('https://www.nyckel.com/v1/functions/fdcyy6xp6ito24tn/invoke', {
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
            if(data.labelName == "Left") {
                // finalData.
                finalData.pol.data = -1;
                // setPoliticalData(-1)
            } else if(data.labelName == "Central") {
                finalData.pol.data = 0;
                // setPoliticalData(0)
            } else if(data.labelName == "Right") {
                finalData.pol.data = 1;
                // setPoliticalData(1)
            }
            finalData.pol.confidence = data.confidence;
            // setPoliticalConfidence(data.confidence)
        }).then((val) => {
            // Query code here for data quality/reliability
            //SECOND ACCOUNT
            fetch('https://www.nyckel.com/v1/functions/5rpyd1p6tf8mzz30/invoke', {
            //MARK SUBMITTED ACCOUNT
            //fetch('https://www.nyckel.com/v1/functions/mtti3fgv03vtl07p/invoke', {
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
                if(data.labelName == "Low") {
                    finalData.qual.data = -1;
                    // setQualityData(-1)
                } else if(data.labelName == "Medium") {
                    finalData.qual.data = 0;
                    // setQualityData(0)
                } else if(data.labelName == "High") {
                    finalData.qual.data = 1;
                    // setQualityData(1)
                }

                finalData.qual.confidence = data.confidence;
                // setQualityConfidence(data.confidence)
            }).then((val) => {
                // Query code here for gender bias
                //SECOND ACCOUNT
                fetch('https://www.nyckel.com/v1/functions/0rwy1kx6nkz59op0/invoke', {
                //MARK SUBMITTED ACCOUNT
                //fetch('https://www.nyckel.com/v1/functions/ky72dde3ymqe0s4w/invoke', {
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
                    if(data.labelName == "Male") {
                        finalData.gen.data = -1;
                        // setGenderData(-1)
                    } else if(data.labelName == "Female") {
                        finalData.gen.data = 1;
                        // setGenderData(1)
                    }
                    finalData.gen.confidence = data.confidence;
                    // setGenderConfidence(data.confidence)
                }).then((final) => {
                    navigate('/results', {
                        state: {
                            one: {
                                header: "Political Bias", 
                                description: "The degree to which the text provided seems to be directed towards a specific political ideology. The bar below, respresents which side the data was evaluated by a neural network as being closer towards.", 
                                leftLabel: "Left", 
                                rightLabel: "Right",
                                value: finalData.pol.data,
                                confidence: finalData.pol.confidence
                            },
                            two: {
                                header: "Gender Bias", 
                                description: "The degree to which the text provided seems to be aimed towards a specific gender. The bar below, represents which gender (if any) we have predicted to be the primary audience of the text.", 
                                leftLabel: "Male", 
                                rightLabel: "Female",
                                value: finalData.gen.data,
                                confidence: finalData.gen.confidence,
                                rightLabelOffset: 20
                            },
                            three: {
                                header: "Data Reliability", 
                                description: "The degree to which the text provided seems to be reliable. This is a measure of the presense or lack thereof of misinformation and fact driven journalism. More information can be found in the Our Model page.", 
                                leftLabel: "Low",
                                rightLabel: "High",
                                value: finalData.qual.data,
                                confidence: finalData.qual.confidence
                            },
                            overall: {
                                header: "Overall",
                                description: "The overall bias of the text is determined as a function of the political/gender bias, data reliability and the confidence that the neural network has in the evaluation returned. The purpose of this value is to provide a general idea of the degree to which a text seems to be addressing a marginal viewpoint. It should be noted that this value does not in any way, indicate malicious intent on behalf of the author, as entirely factual journalism could still be detected to be addressing a specific audience.",
                            }
                        }
                    });
                    // calculateOverall()
                })
            })
        })
        setProgress(0);
    }

    // useEffect(() => {
    //     parentUrlBoxStateSetter(urlBoxText)
    // }, [urlBoxText])

    // useEffect(() => {
    //     parentTextBoxStateSetter(textBoxText)
    // }, [textBoxText])

    const inputClick = (num) => {
        setInputActiveState(num);
    }

    return (
        <div className="homePage">
            {progress === 1 && <Loading />}
            <div className='homePageTitle'> Welcome to Sway Bias Detection Service </div>
            <div className="homePageHeader">
                Enter text or a URL into the boxes below.
            </div>
            <div className="urlTextBox" onClick={() => inputClick(1)}>
                <UserInputField title={"URL"} width={1166} evtHandler={setUrlBoxText}/>
            </div>
            <div className="orLabel">
                OR
            </div>
            <div className="textInputBox" onClick={() => inputClick(2)}>
                <UserInputField title={"Text"} rows={20} width={1166} evtHandler={setTextBoxText}/>
            </div>
            <div className="homepageSubmitButton">
                <SubmitButton onClick={handleSubmitButtonClickEvent}/>
            </div>
        </div>
    )
}

export default HomePage;