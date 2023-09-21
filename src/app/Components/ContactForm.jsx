"use client"
import Link from 'next/link'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact'>
       <div className='lcontact'>
          <h1>Hit Me Up</h1>
          <div className='lbox'>
            <video className='mail' src='/mail.mp4' loop autoPlay muted ></video>
            <h3>Email: <Link target='_blank' href={'dhairyagupta198@gmail.com'}>dhairyagupta198@gmail.com</Link></h3>
          </div>
          <div className='box2'>
            <video className='mail' src='/call.mp4' loop autoPlay muted></video>
            <h3>Contact Number: +919997993023</h3>
          </div>

       </div>
       <div className='rcontact'>
        <video className='cvdo' src='/contact.mp4' loop autoPlay muted></video>
       </div>
    </div>
  )
}

export default ContactForm
