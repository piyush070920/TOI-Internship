import React from 'react'

const BckRedTextWhiteBold = ({children}) => {
  return (
    <div style={{backgroundColor : "red", color:"white", fontWeight:"bold", borderRadius:"4px", padding:"0px 4px"}}>{children}</div>
  )
}

export default BckRedTextWhiteBold