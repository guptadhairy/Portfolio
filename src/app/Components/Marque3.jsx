"use client"
import React from 'react'
import Image from 'next/image';
import Marquee from "react-fast-marquee";
const Marque = () => {
  return (
    <div>
      <Marquee  style={{marginTop: '10px', width: '100%'}} speed={80} pauseOnHover={true} direction="right">
      <div className='image_wraper' >
      <Image className="imgSkill"  src="/mongo.png" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/node.png" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/ex.png" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/ts.png" alt="profile" width={400} height={600} />
        </div>
        <div className='image_wraper' >
      <Image className="imgSkill" src="/rtk.jpg" alt="profile" width={400} height={600} />
        </div>
          </Marquee>
    </div>
  )
}

export default Marque
