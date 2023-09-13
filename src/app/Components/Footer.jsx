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
        <Link href={'/'}><FaLinkedin size={'25px'} /></Link>
        <Link href={'/'}><FiInstagram size={'25px'} /></Link>
        <Link href={'/'}><FiGithub size={'25px'} /></Link>
        <Link href={'/'}><FiTwitter size={'25px'} /></Link>
      </div>
    </div>
  )
}

export default Footer
