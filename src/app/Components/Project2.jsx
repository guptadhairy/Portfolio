import React from 'react'
import Link from 'next/link'
import {BsGithub} from 'react-icons/bs'
import Image from 'next/image';

const Project2 = () => {
  return (
    <>
    <div className='home'>
      <div className='left'>
      <video src="/bit.mp4" loop autoPlay muted></video>
      </div>
      <div className='pr_right'>
        <h1 > Crypto Web-App </h1>
        <p className='para'>This is a Crypto-Currency web-app. This app was made on React and also i have used API in this web-app for fetching the real time data of any CryptoCurrency present in the market. In this app you came to know about all the COIN Exchanges app from where you can trade also.</p>
        <div className='show'>
        <Link className='prButton' target='_blank' href={'https://coinstrader.vercel.app'}>Visit Project </Link>
        
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Project2
