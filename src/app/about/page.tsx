"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';

import ProjectsCount from '../Components/ProjectsCount';
import YearsCount from '../Components/YearsCount';
import ClientsCount from '../Components/ClientsCount';
import Skills from '../Components/Skills'
const page = () => {
  
 
  return (
    <div>
      <div className='about'>
        <h1>Passion Fuels</h1>
        <h1><Typewriter
              options={{
                strings: ['Purpose!', 'Objective!', 'Motive!'],
                autoStart: true,
                loop: true,
                cursor: '',
                wrapperClassName: 'typewriterpara',
              }}
            /></h1>
      </div>
      <div className='me'>
      <div className='meleft'>
        <h1>About Me</h1>
        <p>Hi, I'm <b>Dhairya Gupta</b>, a Full-Stack web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.</p>
        <p>I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
      </div>
      <div className='meImage'>
        <img src='/gallery.png' alt='profile' />
      </div>
      <div  className='meright'>
        <ClientsCount />
        <ProjectsCount />
        <YearsCount />
      </div>
      </div>
      <Skills />
    </div>
  )
}

export default page