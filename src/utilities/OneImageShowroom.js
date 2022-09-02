import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Image } from 'antd';
import {imageArrayBig} from '../data/imagearraybig.js'
import iconNext from '../images/icon-next.svg'
import iconPrev from '../images/icon-previous.svg'


const OneImageShowroom = ({imagePick,setImage}) => {
  const [visible, setVisible] = useState(false);
  let deneme = imageArrayBig[imagePick]

  const imageNext = () => {
    setImage(prevImg => prevImg +1)
    if (imagePick===3) setImage(0)
  }
  const imagePrevious = () => {
    setImage(prevImg => prevImg -1)
    if (imagePick===0) setImage(3)
  }

  return (
    <div className='oneimage-wrapper'>
      <Image
        preview={{
          visible: false,
        }}
        src={deneme}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src={imageArrayBig[0]} />
          <Image src={imageArrayBig[1]} />
          <Image src={imageArrayBig[2]} />
          <Image src={imageArrayBig[3]} />
        </Image.PreviewGroup>
      </div>
      <div onClick={imageNext} className='next-icon'>
        <img src={iconNext} alt='next-icon' />
      </div>
      <div onClick={imagePrevious} className='prev-icon'>
        <img src={iconPrev} alt='previous-icon' />
      </div>
      <div className='pagination'>
        {imagePick+1} / 4
      </div>
    </div>
  );
};

export default OneImageShowroom;
