"use client"
import React from 'react';
import Marque from '../Components/Marque';
import Link from 'next/link';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import Transition from './Transition';
import Cursor from "./Cursor";
import Background from './Background';

const Home = () => {
  return (
    <>
      <Transition />
      <Cursor />
      <Background />
      <div className='home'>
        <div className='left'>
          <Image className='profile' src="/pro2.jpg" alt="profile" width={400} height={600} />
        </div>
        <div className='right'>
          <h1>Turning Vision Into Reality With </h1>
          {/* <Marque /> */}
          <h1 className='text-blue-900'>Code And Reality</h1>
          <p className='para'>Greetings! I am Dhairya Gupta, a proficient full-stack developer passionate about transforming ideas into cutting-edge web applications. Dive into my portfolio to explore my latest projects, where I showcase my expertise in React.js, Next.js, and various facets of web development. Lets innovate and build something extraordinary together!</p>
          <div className='resume' >
            <Link target='_blank' href={'/Dhairya_resume(1).pdf'} download={true}>Resume <FiDownload size={'30px'} /> </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
