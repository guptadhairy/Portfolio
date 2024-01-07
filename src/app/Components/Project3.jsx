import React from 'react'
import Link from 'next/link'
import {BsGithub} from 'react-icons/bs'
import Image from 'next/image';

const Project3 = () => {
  return (
    <>
    <div className='home1'>
      <div className='left1'>
        <video className="shiva" src="/shivVdo.mp4" autoPlay loop muted></video>
      </div>
      <div className='pr_right'>
        <h1 >Temple Web-App </h1>
        <p className='para'>I developed a React-based Temple Web App with features that allow users to seamlessly access recorded Aarti videos online. The platform facilitates online donations and provides a streamlined communication channel to connect with the temple's priest.</p>
        <div className='show'>
        <Link className='prButton' target='_blank' href={'https://temple-second-testing.vercel.app/'}>Visit Project </Link>
        <Link href={'https://github.com/guptadhairy/Temple'} target='_blank'><BsGithub size={'40px'} /></Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Project3
