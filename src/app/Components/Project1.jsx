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
        <p className='para'>I've developed a MERN-stack web app that streamlines student enrollment in courses, offering a smooth platform for purchasing and learning. The app features an admin dashboard for creating and managing courses, along with access to detailed financial and statistical data, including profit analytics.</p>
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
