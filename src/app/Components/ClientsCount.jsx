"use client"
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
const ClientsCount = () => {
    const [count, setCount] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });
  useEffect(() => {
    if (inView) {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount++;
        setCount(currentCount);
        if (currentCount >= 10) {
          clearInterval(interval);
        }
      }, 70);

      return () => clearInterval(interval);
    }
  }, [inView]);
  return (
    <div>
      <div ref={inViewRef} >
        <h1> {inView ? count : 0}+</h1>
        <p>Clients are satisfied</p>
      </div>
    </div>
  )
}

export default ClientsCount
