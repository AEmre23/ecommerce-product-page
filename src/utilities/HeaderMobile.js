import React,{useState,useEffect, useRef} from 'react'
import {Link,useLocation} from 'react-router-dom'

import iconMenu from '../images/icon-menu.svg'
import iconClose from '../images/icon-close.svg'

import {options} from '../data/options'

const HeaderMobile = (props) => {
  const {
    hamburgermenu,
    mobileMenu,
    cart,
  }=props

  const [iconMobileMenu,setIcon] = useState(iconMenu)
  const {pathname} = useLocation();
  const blackscreen = useRef();
  const hamburgerIcon = useRef();

  useEffect(() => {
    hamburgermenu.current.style.transform ='translateX(-275px)'
    blackscreen.current.style.display='none'
    setIcon(iconMenu)
  }, [pathname]) // whenever new page opened (pathname changes), it closes the mobile menu.

  function hamburgerOpener () {
    let displayChecker = hamburgermenu.current.style.transform === 'translateX(-275px)'
    ? 'translateX(-20px)' : 'translateX(-275px)'
    hamburgermenu.current.style.transform = displayChecker // for opening and closing mobile menu
    
    if (hamburgermenu.current.style.transform ==='translateX(-20px)') setIcon(iconClose)
    else setIcon(iconMenu) // changing menu icon when open and close
    if (iconMobileMenu === iconMenu) hamburgerIcon.current.style.position='fixed'
    else hamburgerIcon.current.style.position='relative'// changing the icon position style because when menu is opened, icon stays at top, not moving with menu.
    
    let bscreenChecker = blackscreen.current.style.display === 'block'
    ? 'none' : 'block'
    blackscreen.current.style.display=bscreenChecker // for blackscreen behind the mobile menu
    cart.current.style.display='none'
  }


  let hamburgerStyle={
    textDecoration:'none',fontWeight:'700', color:'black'
  }
 let loopMobile = options.map((option,index) => { // For hamburger menu options // 'options' is the array that we import at the top of the page
    let path = option.toLowerCase() 
    if ( pathname === '/' + path ) hamburgerStyle={textDecoration:'underline',fontWeight:'700', color:'orange'}
    else hamburgerStyle={textDecoration:'none',fontWeight:'700', color:'black'}
    // this style making the current page name underlined and makes its color orange on mobile menu
    return (
      <Link key={index} style={hamburgerStyle} to={path}>
        <p>{option}</p>
      </Link>
    )
  })
  let homeStyle= pathname=== '/'
  ? {textDecoration:'underline',fontWeight:'700', color:'orange'}
  : {textDecoration:'none',fontWeight:'700', color:'black'}
  //  home page doesnt have any path,it has only '/' , so we have to make a seperate stlying for menu selection

  return (
  <div className='header-mobile'> {/* Header mobile hamburger*/}
    <div ref={hamburgerIcon} className='hamburger-icon'>
      <img onClick={hamburgerOpener} src={iconMobileMenu} alt='menu-icon' />
    </div>
    <div ref={hamburgermenu} className='hamburger-menu'>
      <div ref={blackscreen} onClick={hamburgerOpener} className='blackscreen'></div>

      <div ref={mobileMenu} className='mobile-menu'>
        <div className='mobile-menu-options'>
          <Link key='homepage' style={homeStyle} to='/'>
            <p>Home</p>
          </Link>
          {loopMobile}
        </div>
      </div>
    </div>
  </div> 
  )
}

export default HeaderMobile
