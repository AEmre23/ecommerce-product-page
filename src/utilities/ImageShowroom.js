import React,{useState} from 'react'
import OneImageShowroom from './OneImageShowroom'
import MultipleImages from './MultipleImages'

const ImageShowroom = () => {
  const [imagePick,setImage] = useState(0)
  return (
    <div className='imageshowroom-container'>
      <OneImageShowroom 
        imagePick={imagePick}
        setImage={setImage}
      />
      <MultipleImages 
        imagePick={imagePick}
        setImage={setImage}
      />
    </div>
  )
}

export default ImageShowroom
