import React from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
  const linkStyle= {textDecoration:'none',fontWeight:'700',color:'black'}
  const divStyle={textAlign:'center',margin:'5px',color:'$orange',fontSize:'32px',width:'98%',height:'auto',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}
  return (
    <div style={divStyle}>
      <p>This page is still under construction.<br /></p>
      <p>You can go back <Link style={linkStyle} to='/'><u>Home</u></Link></p>
    </div>
  )
}

export default UnderConstruction
