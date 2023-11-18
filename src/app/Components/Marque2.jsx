"use client"
import React from 'react'
import Image from 'next/image';
import Marquee from "react-fast-marquee";
const Marque = ({direction="left"}) => {
  return (
    <div>
      <Marquee  style={{marginTop: '10px', width: '100%'}} speed={80} pauseOnHover={true} direction={direction}>
      <div className='image_wraper' >
      <Image className="imgSkill"  src="/next.png" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/react.png" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/js.jpg" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/css.jpg" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/html.png" alt="profile" width={400} height={600} />
        </div>
          </Marquee>
    </div>
  )
}

export default Marque
