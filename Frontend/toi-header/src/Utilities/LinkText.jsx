import React from 'react'

const LinkText = ({ link, text }) => {
  return (
    <>
      <a href={link || "/#"} className="text-xs">
        {" "}
        {text}{" "}
      </a>
    </>
  );
};

export default LinkText