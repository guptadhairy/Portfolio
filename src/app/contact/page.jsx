"use client"
import React, { useState } from 'react'
import Transition from '../Components/Transition'
import axios from 'axios'

const Page = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const submitHandler = async (e)=>{
      e.preventDefault();

      setEmail("");
      setMessage("");
      setName("");

      try {
        await axios.post(process.env.NEXT_PUBLIC_BACKEND,{
          name,email,message
        },
        {
          headers:{
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        console.log("Your message send successfully");
      } catch (error) {
        console.log("Some internal error");
        console.log(error);
      }
  }
  return (
    <>
    <Transition />
    <div className='contact'>
       <div className='lcontact'>
        <div>
          <h1>Hit Me Up</h1>
          <form onSubmit={submitHandler} className='cform'>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Your Name' />
            <input value={email} onChange={(e) =>setEmail(e.target.value)} type='email' placeholder='Enter Your email' />
            <textarea  value={message} onChange={(e) =>setMessage(e.target.value)} placeholder='Enter Message ' />
            <button type='submit'>SEND</button>
          </form>
        </div>
       </div>
       <div className='rcontact'>
        <video className='cvdo' src='/contact.mp4' loop autoPlay muted></video>
       </div>
    </div>
    </>
  )
}

export default Page
