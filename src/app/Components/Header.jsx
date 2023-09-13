import React from 'react'
import Link from 'next/link';
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
      <div className=' w-28 h-auto flex items-center justify-center relative ro'>
    <img src='/CircularText.svg' alt='v' className='animate-spin-slow' />
    </div>
        
      </div>
      <div className='rightnav'>
        <Link href={'/about'}><img src='/linkedin.svg' alt='linkedIn' /></Link>
        <Link href={'/about'}><img src='/logo-github.svg' alt='linkedIn' /></Link>
        <Link href={'/about'}><img  src='/twiter.png' alt='linkedIn' /></Link>
        <Link href={'/about'}><img src='/logo-github.svg' alt='linkedIn' /></Link>
      </div>
    </div>
  )
}

export default Header
