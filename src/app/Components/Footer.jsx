import React from 'react'
import Link from 'next/link';
import {FiInstagram,FiGithub,FiTwitter} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='leftfooter'>
      2023 © All Rights Reserved.
      </div>
      <div className='centerfooter'>
      Built with ♡ by Dhairya
      </div>
      <div className='rightfooter'>
        <Link href={'https://www.linkedin.com/in/dhairya-gupta-2b071a223/'}><FaLinkedin size={'25px'} /></Link>
        <Link href={'https://www.instagram.com/gupta_dhairya_31/'}><FiInstagram size={'25px'} /></Link>
        <Link href={'https://github.com/guptadhairy'}><FiGithub size={'25px'} /></Link>
        <Link href={'https://twitter.com/DhairyaGup91738'} target='_blank'><FiTwitter size={'25px'} /></Link> 
      </div>
    </div>
  )
}

export default Footer
