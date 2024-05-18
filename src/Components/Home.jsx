import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import HomeShop from './HomeShop'
import Strengths from './Strengths'
import HomeContact from './HomeContact'
import { useRef } from 'react'
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
const resizeObserverErrorHandler = e => {
  if (e.message.includes('ResizeObserver loop')) {
    e.stopImmediatePropagation();
  }
};

window.addEventListener('error', resizeObserverErrorHandler);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function Main() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const smootherRef = useRef(null);

  useGSAP (() => {
    if (containerRef.current && contentRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: containerRef.current,
        content: contentRef.current,
        smooth: 2,
        effects: true,
      });

      ScrollTrigger.refresh();
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, [containerRef, contentRef]);
  return (
    <main >
          <Hero/>
          <AboutUs/>
          <HomeShop/>
          <Strengths/>
          <HomeContact/>
    </main>
  )
}

export default Main