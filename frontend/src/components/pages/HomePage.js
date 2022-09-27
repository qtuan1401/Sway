import './styles/HomePage.css'

import UserInputField from '../UserInputField'
import SubmitButton from '../SubmitButton'

const HomePage = () => {
    const handleSubmitButtonClick = () => {
        // Add code here to handle transition to the results page
    }

    return (
        <div className="homePage">
            <div className="homePageHeader">
                Enter text or a URL into the boxes below.
            </div>
            <div className="urlTextBox">
                <UserInputField title={"URL"} width={1166}/>
            </div>
            <div className="orLabel">
                OR
            </div>
            <div className="textInputBox">
                <UserInputField title={"Text"} rows={20} width={1166}/>
            </div>
            <div className="homepageSubmitButton">
                <SubmitButton onClick={handleSubmitButtonClick}/>
            </div>
        </div>
    )
}

export default HomePage;