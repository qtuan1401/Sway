import './styles/SubmitButton.css'

// Prop Descriptions:
// onClick - Points to an event handler function.

const SubmitButton = ({onClick}) => {
    return (
        <div className="submitButton" onClick={onClick}>
            <div className="buttonText">Submit</div>
        </div>
    )
}

export default SubmitButton;