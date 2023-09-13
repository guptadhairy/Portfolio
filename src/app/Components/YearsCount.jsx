"use client"
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
const YearsCount = () => {
    const [count, setCount] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed to control when the counting animation starts.
  });
  useEffect(() => {
    if (inView) {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount++;
        setCount(currentCount);
        if (currentCount >= 2) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [inView]);
  return (
    <div>
      <div ref={inViewRef} >
        <h1> {inView ? count : 0}+</h1>
        <p>Years Of Experience</p>
      </div>
    </div>
  )
}

export default YearsCount
