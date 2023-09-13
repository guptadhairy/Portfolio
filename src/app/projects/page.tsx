"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Project1 from "../Components/Project1";
import Project2 from "../Components/Project2";
import Project3 from "../Components/Project3";
import Transition from "../Components/Transition";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
        
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      
      pin.kill();
    };
  }, []);

  return (
    <>
    <Transition />
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="project">
            <h3>Imagination </h3>
            <h3> Trumps </h3>
            <h3> Knowledge! </h3>
            </div>
          </div>
          <div className="scroll-section">
          <Project1 />
          </div>
          <div className="scroll-section">
          <Project2 />
          </div>
          <div className="scroll-section">
          <Project3 />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ScrollSection;