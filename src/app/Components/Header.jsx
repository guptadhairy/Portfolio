import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {BiLogoGmail} from 'react-icons/bi'
const Header = () => {
  return (
    <div className='header'>
      <div className='leftnav'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
      <div className='centernav'>
      </div>
      <div className='rightnav'>
        <a href={'https://www.linkedin.com/in/dhairya-gupta-2b071a223/'} target='_blank'><Image src="/linkedin.svg" alt="linkedIn" width={50} height={40} /></a>
        <a href={'https://github.com/guptadhairy'} target='_blank'><Image src="/logo-github.svg" alt="linkedIn" width={50} height={40} /></a>
        <a href={'https://twitter.com/DhairyaGup91738'} target="_blank"><Image  src="/twiter.png" alt="linkedIn" width={40} height={40} /></a>
        <a style={{marginLeft: '20px'}} href={"/contact"}><BiLogoGmail size={'25px'}  /></a>
      </div>
    </div>
  )
}

export default Header
