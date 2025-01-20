import React, { useEffect, useState } from "react";
import userData from "../assets/userData.json";
import validateSerialId from "./validateSerialId";
const SignIn = () => {
  const [user, setUser] = useState(userData?.user1);

  const [isScrolled, setIsScrolled] = useState(false);
  const scrolledThreshold = 50;
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight;
      const scrollPercentage = (scrollY / (totalHeight - windowHeight)) * 100;

      if (scrollPercentage >= scrolledThreshold && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollPercentage < scrolledThreshold && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
// console.log(isScrolled);

const style =  `rounded ${isScrolled === true ? "bg-green-300" : "bg-red-300"} px-[2px]`

  function isNumber(value) {
    return typeof value === "number" && isFinite(value);
  }
  return user &&
    user?.isUserLogIn === true &&
    validateSerialId(user?.userSerialId) &&
    isNumber(user?.ssoId) ? (
    <span className={style}>{user?.userSerialId}</span>
  ) : (
    <span className={style}>SignIn</span>
  );
};

export default SignIn;
