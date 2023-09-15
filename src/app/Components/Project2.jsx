import React from 'react'
import Link from 'next/link'
import {BsGithub} from 'react-icons/bs'
import Image from 'next/image';

const Project2 = () => {
  return (
    <>
    <div className='home'>
      <div className='left'>
      <Image className="primg" src="/gallery.png" alt="profile" width={500} height={500} />
      </div>
      <div className='pr_right'>
        <h1 > Startup Website </h1>
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

export default Project2
