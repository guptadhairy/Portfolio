import React from 'react'
import Marque from '../Components/Marque'
import Link from 'next/link'
import {BsGithub} from 'react-icons/bs'

const Project1 = () => {
  return (
    <>
    <div className='home'>
      <div className='left'>
        <img className='primg' src='/gallery.png' alt='profile' />
      </div>
      <div className='pr_right'>
        <h1>Temple Web-App </h1>
        <p className='para'>As a skilled full-stack developer. I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js, Next.js and web development.</p>
        <div className='show'>
        <Link className='prButton' target='_blank' href={'/about'}>Visit Project </Link>
        <Link href={'/contact'}><BsGithub size={'40px'} /></Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Project1
