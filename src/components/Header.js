import React,{useRef,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
// * Images
import logo from '../images/logo.svg'
import avatar from '../images/image-avatar.png'
import iconCart from '../images/icon-cart.svg'
import iconDelete from '../images/icon-delete.svg'
import iconCartThumb from '../images/image-product-1-thumbnail.jpg'
// ? Utilities
import HeaderOptions from '../utilities/HeaderOptions'
import HeaderMobile from '../utilities/HeaderMobile'

const Header = ({cart,amount,setAmount}) => {
  const {pathname} = useLocation()
  useEffect(() => {
    cart.current.style.display='none';
  },[pathname])


  const hamburgermenu = useRef()
  const mobileMenu = useRef()

  function cartOpener() {
    let displayChecker = cart.current.style.display === 'block' ? 'none' : 'block'
    cart.current.style.display = displayChecker
  }

  function deleteAmount() {
    setAmount(0)
    let fullCart={display:'none'}
  }

  let cartCounter = amount > 0 // This is for cart count display if there are items on cart
  ? {opacity:'1'} : {opacity:'0',cursor:'default'}

  let emptyCart = amount > 0 
  ? {display:'none'} : {display:'block'}

  let fullCart = amount > 0
  ?{display:'flex'} : {display:'none'}


  // This code for divide the numbers bigger than 1000 to 1,000 for totalprice at cart
  let amountCalculator = amount * 125
  let stringAmount = amountCalculator.toString()
  let newAmount = ''
  if (stringAmount.length == 4){
    newAmount += stringAmount[0] + ',' + stringAmount.slice(1) // for x,000
    amountCalculator = newAmount
  }
  else if (stringAmount.length == 5) {
    newAmount += stringAmount[0] + stringAmount[1] + ',' + stringAmount.slice(2)
    amountCalculator = newAmount // for xx,000
  }

  return (
    <div className='header-wrapper'>
      <div className='header-main'>
        <HeaderMobile 
          hamburgermenu={hamburgermenu}
          mobileMenu={mobileMenu}
          cart={cart}
        />
        <div className='header-left'>  {/* Header left side*/}
          <div className='header-logo'> 
            <Link to='/'><img src={logo} alt='avatar' /></Link>
          </div>
          <div className='header-options'>
            <HeaderOptions />
          </div>
        </div>

        <div className='header-right'> {/* Header right side*/}
          <div className='header-cart'>
            <div onClick={cartOpener} style={cartCounter} className='cart-counter'>
              {amount}
            </div>
            <img onClick={cartOpener} src={iconCart} alt='cart-icon' />
            <div ref={cart} className='cart-displayer'>
              <div className='content'>Cart</div>
              <div className='cart-items'>
                <div style={fullCart} className='cart-inside'>
                  <div className='cart-with-items'>
                    <div className ='item-image'>
                      <img src={iconCartThumb} alt='image-preview' />
                    </div>
                    <div className='item'>
                      <div className='item-name'>
                        Fall Limited Edition Sneakers
                      </div>
                      <div className='item-price'>
                        $125.00 x {amount} = <span style={{color:'black',fontWeight:'700'}}>{amountCalculator}.00 $</span>
                      </div>
                    </div>
                    <div className='item-delete'>
                      <img onClick={deleteAmount} src={iconDelete} alt='trashcan' />
                    </div>
                  </div>
                  <div className='checkout'>
                    <Link style={{textDecoration:'none',color:'white'}} to='checkout'>
                      <span>Checkout</span>
                    </Link>
                  </div>
                </div>
                <div style={emptyCart} className='emptycart'>
                  <br/>
                  Your Cart is Empty
                </div>
              </div>
            </div>
          </div>
          <div className='header-pp'>
            <Link style={{marginLeft:'20px'}} to='profile'>
              <img src={avatar} alt='avatar' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
