import React from 'react'
import ImageShowroom from '../utilities/ImageShowroom'
import Description from '../utilities/Description'

const Home = ({amount,setAmount,cart}) => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <ImageShowroom />
        <Description 
          amount={amount}
          setAmount={setAmount}
          cart={cart}
        />
      </div>
    </div>
  )
}

export default Home
