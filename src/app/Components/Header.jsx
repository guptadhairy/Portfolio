import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

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
    <Image src="/CircularText.svg" alt="v" width={300} height={40} className="animate-spin-slow" />
    </div>
        
      </div>
      <div className='rightnav'>
        <Link href={'/about'}><Image src="/linkedin.svg" alt="linkedIn" width={50} height={40} /></Link>
        <Link href={'/about'}><Image src="/logo-github.svg" alt="linkedIn" width={50} height={40} /></Link>
        <Link href={'/about'}><Image  src="/twiter.png" alt="linkedIn" width={40} height={40} /></Link>
        <Link href={'/about'}><Image src="/logo-github.svg" alt="linkedIn" width={50} height={40} /></Link>
      </div>
    </div>
  )
}

export default Header
