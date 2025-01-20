import React from "react";
import Edition from "../../../Utilities/Edition.jsx";
import DateTime from "../../../Utilities/DateTime.jsx";
import LocationAndWeather from "../../../Utilities/LocationAndWeather.jsx";
import GeneralLink from "../../../Utilities/GeneralLink.jsx";
import SignIn from "../../../Utilities/SignIn.jsx";
import SocialMediaLinks from "../../../Utilities/SocialMediaLinks.jsx";
import "./HeaderTop.css";
import BckRedTextWhiteBold from "../../../Utilities/BckRedTextWhiteBold.jsx";
const HeaderTop = ({ editions, dateTime }) => {
  return (
    <div
      className="header-top flex justify-between border-b "
      title="header top"
    >
      <div className="header-top-left flex justify-evenly ">
        <Edition data={editions} />
        <DateTime data={dateTime} />
        <LocationAndWeather />
      </div>
      <div className="header-top-right flex justify-evenly gap-x-2">
        <BckRedTextWhiteBold>
          <GeneralLink label={"subscribe to TOI+"} id={"TOI+"} link={"#"} />
        </BckRedTextWhiteBold>
        <SignIn />
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default HeaderTop;
