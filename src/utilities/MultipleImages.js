import React,{useRef} from 'react';
import 'antd/dist/antd.min.css';
import {imageArraySmall} from '../data/imagearraysmall.js'

const MultipleImages = ({imagePick,setImage}) => {
  const mainClass = useRef();

  const Try = (e) => {
    let remover = mainClass.current.childNodes
    remover.forEach((each) => {
      each.classList.remove('selected-image')
    })
    if (e.target.classList.contains('thumb1')) {
      setImage(0)
      e.target.classList.add('selected-image')
    }
    else if (e.target.classList.contains('thumb2')){
      setImage(1)
      e.target.classList.add('selected-image')
    } 
    else if (e.target.classList.contains('thumb3')){
      setImage(2)
      e.target.classList.add('selected-image')
    } 
    else {
      setImage(3)
      e.target.classList.add('selected-image')
    }
  }
    return(
    <div ref={mainClass} className='thumbail-images'>
      <img onClick={Try} className='previewThumbs thumb1 selected-image' width={80} src={imageArraySmall[0]} alt='thumb-1' />
      <img onClick={Try} className='previewThumbs thumb2' width={80} src={imageArraySmall[1]} alt='thumb-2' />
      <img onClick={Try} className='previewThumbs thumb3' width={80} src={imageArraySmall[2]} alt='thumb-3' />
      <img onClick={Try} className='previewThumbs thumb4' width={80} src={imageArraySmall[3]} alt='thumb-4' />
    </div>
    )
  }
export default MultipleImages
// eslint-disable-next-line