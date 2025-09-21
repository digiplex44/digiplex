"use client"
import { useEffect, useRef } from 'react';

export const useMouseParallax = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const centerX = wrapper.clientWidth / 2;
      const centerY = wrapper.clientHeight / 2;
      const offsetX = (mouseX - centerX) / 70;
      const offsetY = (mouseY - centerY) / 70;

      const elementMove = wrapper.querySelectorAll('.element-move');
      const elementMoveX = wrapper.querySelectorAll('.element-move-x');

      elementMove.forEach((element, index) => {
        const offset = index + 1;
        element.style.transform = `translate(${offsetX * offset}px, ${offsetY * offset}px)`;
      });

      elementMoveX.forEach((element, index) => {
        const offset = index + 2;
        element.style.transform = `translate(${offsetX * offset}px)`;
      });
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    return () => wrapper.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return wrapperRef;
};