import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
const SocialMediaLinks = () => {
  return (
    <div className="flex flex-wrap overflow-hidden gap-2 max-h-8 items-center ">
      <CiFacebook />
      <CiTwitter />
      <SlSocialInstagram />
    </div>
  );
};

export default SocialMediaLinks;
