import React,{useState} from 'react'
// * Images
import cartIcon from '../images/icon-cart.svg'

const Description = ({amount,setAmount,cart}) => {

  const [lastValue,setLastValue] = useState(1)

  const amountChanger = (e) => {
    if(e.target.value == 1) setLastValue(prevValue => prevValue + 1)
    else if (lastValue != 1) setLastValue(prevValue => prevValue - 1)
  }

  const getAmount = () => {
    setAmount(prevAmount => prevAmount + lastValue)
    cart.current.style.display='block'
    window.scrollTo(0, 0)
    setLastValue(1)
  }
  
  return (
    <div className='description-container'>
      <div className='text-area'>
        <div className='text-small-header'>
          SNEAKER  COMPANY
        </div>        
        <div className='text-header'>
          Fall Limited Edition Sneakers
        </div>
        <div className='text-description'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </div>
      </div>
      <div className='price-area'>
        <div className='d-price'>$125.00 <span className='discount'>50%</span></div>
        <div className='r-price'>$250.00</div>
      </div>
      <div className='addtocart-area'>
        <div className='cart-incdec'>
          <div className='decreaser'>
            <button onClick={amountChanger} value={0}>-</button>
          </div>
          <div className='amount'>

            <input type='number' value={lastValue} disabled/>
          
          </div>
          <div className='increaser'>
            <button onClick={amountChanger} value={1}>+</button>
          </div>
        </div>
        <button onClick={getAmount} className='cart-adder'>
          <span className='shopcart'>
            <img src={cartIcon} alt='cart-icon' /> 
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Description

