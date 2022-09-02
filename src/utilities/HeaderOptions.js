import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {options} from '../data/options'

const HeaderOptions = () => {
  let activeState ={
    borderBottom: '4px solid',
    borderColor:'hsl(26, 100%, 55%)',
    paddingBottom: '20px',
    textDecoration:'none'
  }
  let activeStat

  const {pathname} = useLocation()

  let headerLoop = options.map((opt,index) => {
    let path = opt.toLowerCase()
    activeStat = pathname == '/' + path
    ? activeStat = activeState
    : activeStat = {textDecoration:'none'}
    return (
    <Link style={activeStat} key={index} to={path}>
      <span>{opt}</span>
    </Link>
    )
  })

  return (
    <>
      {headerLoop}
    </>
  )
}

export default HeaderOptions
