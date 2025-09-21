"use client"
import { useEffect, useState, useRef } from 'react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    setPathLength(totalLength);

    path.style.transition = path.style.WebkitTransition = "none";
    path.style.strokeDasharray = `${totalLength} ${totalLength}`;
    path.style.strokeDashoffset = totalLength;
    
    path.getBoundingClientRect();
    
    path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      const dashoffset = totalLength - (scrollTop * totalLength) / docHeight;
      
      path.style.strokeDashoffset = dashoffset;
      
      setIsVisible(scrollTop > 50);
    };

    updateProgress();
    
    window.addEventListener('scroll', updateProgress);
    
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 550;

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      
      window.scrollTo(0, startPosition * (1 - ease));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
    
    return false;
  };

  return (
    <div 
      className={`progress-wrap cursor-pointer transition-all duration-300 ${
        isVisible ? 'active-progress' : ''
      }`}
      onClick={scrollToTop}
    >
      <svg 
        className="progress-circle svg-content" 
        width="100%" 
        height="100%" 
        viewBox="-1 -1 102 102"
      >
        <path 
          ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};