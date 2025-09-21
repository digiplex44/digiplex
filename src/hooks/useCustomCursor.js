"use client"
import { useEffect, useRef } from 'react';

export const useCustomCursor = () => {
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const ratio = 0.99;
    let animationId;

    const handleMouseMove = (e) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      mouseRef.current.x = e.pageX;
      mouseRef.current.y = e.pageY - scrollTop;
    };

    const updatePosition = () => {
      const mouse = mouseRef.current;
      const pos = posRef.current;

      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;

      cursor.style.transform = `translate(${pos.x - 20}px, ${pos.y - 20}px)`;
      animationId = requestAnimationFrame(updatePosition);
    };

    const handleMouseEnter = () => {
      cursor.style.transform += ' scale(1.7)';
      cursor.style.opacity = '0.15';
      cursor.style.backgroundColor = '#1a55f933';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(1.7)', '');
      cursor.style.opacity = '1';
      cursor.style.backgroundColor = 'transparent';
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input[type=submit]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    updatePosition();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return cursorRef;
};