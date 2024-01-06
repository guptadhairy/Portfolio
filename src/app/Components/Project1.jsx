import React from 'react'
import Link from 'next/link'
import {BsGithub} from 'react-icons/bs'


const Project1 = () => {
  return (
    <>
    <div className='home1'>
      <div className='left1'>
        <video className="shiva" src="/learnr.mp4" autoPlay loop muted></video>
      </div>
      <div className='pr_right'>
        <h1 >Learnr </h1>
        <p className='para'>I have successfully developed a MERN-Stack web application that facilitates student enrollment in courses, providing a seamless platform for purchasing and learning. Additionally, the application includes an administrative dashboard, empowering administrators to create new courses, manage existing ones, and access comprehensive financial and statistical data, including profit analytics.</p>
        <div className='show'>
        <Link className='prButton' target='_blank' href={'https://learnr-in.vercel.app/'}>Visit Project </Link>
        <Link href={'https://github.com/guptadhairy/Learnr'} target='_blank'><BsGithub size={'40px'} /></Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Project1
