import React from 'react'
import Marque from '../Components/Marque'
import Link from 'next/link'
import {FiDownload} from 'react-icons/fi'
const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='left'>
        <img className='mask1' src='/gallery.png' alt='profile' />
      </div>
      <div className='right'>
        <h1>Turning Vision Into Reality With </h1>
        <Marque />
        <p className='para'>As a skilled full-stack developer. I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js, Next.js and web development.</p>
        <div className='resume'>
        <Link target='_blank' href={'/Dhairya.pdf'} download={true}>Resume <FiDownload size={'30px'}/> </Link>
        <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home
