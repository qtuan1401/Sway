import HomeIcon from "./common-ui/HomeIcon";
import MoreinfoIcon from "./common-ui/MoreinfoIcon";
import RoundButton from "./common-ui/RoundButton";
import OurmodelIcon from "./common-ui/OurmodelIcon";
import ShareIcon from "./common-ui/ShareIcon";

import "./Navbar.css";




export default function Navbar() {
  return (
    <div className="nav-container">
      <RoundButton >
        <HomeIcon />
      </RoundButton>
      
      <RoundButton>
        <OurmodelIcon />
      </RoundButton>

      <RoundButton>
        <MoreinfoIcon />
      </RoundButton>

      <RoundButton>
        <ShareIcon />
      </RoundButton>
    </div>
  );
}