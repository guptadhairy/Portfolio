import React from 'react'
import Link from 'next/link'
import {BsGithub} from 'react-icons/bs'
import Image from 'next/image';

const Project1 = () => {
  return (
    <>
    <div className='home1'>
      <div className='left1'>
        <video className="shiva" src="/shivVdo.mp4" autoPlay loop muted></video>
      </div>
      <div className='pr_right'>
        <h1 >Temple Web-App </h1>
        <p className='para'>This is a Temple Web-App . It was made on React. The functionality of this web-app is that you can browse recorded videos of Aarti online . You can donate online and also you can contact to the pandit ji of the temple</p>
        <div className='show'>
        <Link className='prButton' target='_blank' href={'https://temple-second-testing.vercel.app/'}>Visit Project </Link>
        <Link href={'https://github.com/guptadhairy/Temple'} target='_blank'><BsGithub size={'40px'} /></Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Project1
