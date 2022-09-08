import './LogoDisplay.css'

// Prop Descriptions:
// size - Determines the size of logo. Width is auto-generated to preserve aspect ratio.
// img_src - Source directory of image

const LogoDisplay = ({size, img_src}) => {
    return (
        <div className="logo">
            <img src={img_src} height={size}/>
        </div>
    )
}

LogoDisplay.defaultProps = {
    size: 115
}

export default LogoDisplay;