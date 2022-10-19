import './styles/HomePage.css'
import React, {useState, useEffect} from 'react'

import UserInputField from '../UserInputField'
import SubmitButton from '../SubmitButton'

// Prop descriptions:
// submitHandler - Points to an event handler function.
// I've done this ^^ so that the event handler can be passed in from
// the page controller component. This allows the page controller to
// determine the switchover to the results page.

const HomePage = ({submitHandler, inputStateChangeHandler, parentUrlBoxStateSetter, parentTextBoxStateSetter}) => {
    const [urlBoxText, setUrlBoxText] = useState("")
    const [textBoxText, setTextBoxText] = useState("")

    useEffect(() => {
        parentUrlBoxStateSetter(urlBoxText)
    }, [urlBoxText])

    useEffect(() => {
        parentTextBoxStateSetter(textBoxText)
    }, [textBoxText])

    const urlClick = () => {
        inputStateChangeHandler(1)
    }

    const textClick = () => {
        inputStateChangeHandler(2)
    }

    return (
        <div className="homePage">
            <div className="homePageHeader">
                Enter text or a URL into the boxes below.
            </div>
            <div className="urlTextBox" onClick={urlClick}>
                <UserInputField title={"URL"} width={1166} evtHandler={setUrlBoxText}/>
            </div>
            <div className="orLabel">
                OR
            </div>
            <div className="textInputBox" onClick={textClick}>
                <UserInputField title={"Text"} rows={20} width={1166} evtHandler={setTextBoxText}/>
            </div>
            <div className="homepageSubmitButton">
                <SubmitButton onClick={submitHandler}/>
            </div>
        </div>
    )
}

export default HomePage;