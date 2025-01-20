import React from 'react'
import { Link } from 'react-router-dom'

const GeneralLink = ({ label, link, id }) => {
  return (
    label && 
    typeof label === 'string' && ( 
      <Link to={link || "/#"} key={id}> 
        {label} 
      </Link>
    )
  );
};

export default GeneralLink;