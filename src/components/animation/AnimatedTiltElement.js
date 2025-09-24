'use client'
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { useEffect, useRef } from 'react';

export default function AnimatedTiltElement({ 
  children, 
  animation = 'slideUp',
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  style = {},
  as: Component = 'div',
  // Options pour l'effet de tilt
  enableTilt = true,
  tiltMaxRotation = 10,
  tiltPerspective = 800,
  tiltTransition = '0.1s ease-out',
  tiltResetTransition = '0.3s ease-out',
  ...props 
}) {
  const [intersectionRef, isVisible] = useIntersectionAnimation({
    threshold,
    triggerOnce,
    delay
  });
  
  const tiltRef = useRef(null);

  // Effet de tilt au hover
  useEffect(() => {
    if (!enableTilt) return;
    
    const element = tiltRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -tiltMaxRotation;
      const rotateY = ((x - centerX) / centerX) * tiltMaxRotation;

      element.style.transform = `perspective(${tiltPerspective}px) translate3d(0px, 0px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      element.style.transition = `transform ${tiltTransition}`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `perspective(${tiltPerspective}px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)`;
      element.style.transition = `transform ${tiltResetTransition}`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableTilt, tiltMaxRotation, tiltPerspective, tiltTransition, tiltResetTransition]);

  // Définition des animations (repris de ton AnimatedElement)
  const animations = {
    slideUp: {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    slideDown: {
      initial: { opacity: 0, transform: 'translateY(-40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    slideLeft: {
      initial: { opacity: 0, transform: 'translateX(40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    slideRight: {
      initial: { opacity: 0, transform: 'translateX(-40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    scaleIn: {
      initial: { opacity: 0, transform: 'scale(0.8)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    },
    rotateIn: {
      initial: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
      animate: { opacity: 1, transform: 'rotate(0deg) scale(1)' }
    }
  };

  const currentAnimation = animations[animation] || animations.slideUp;
  
  const animationStyles = isVisible 
    ? {
        ...currentAnimation.animate,
        transition: `all ${duration}s ease-out`
      }
    : {
        ...currentAnimation.initial,
        transition: `all ${duration}s ease-out`
      };

  // Fonction pour combiner les refs
  const setRefs = (element) => {
    intersectionRef.current = element;
    tiltRef.current = element;
  };

  return (
    <Component
      ref={setRefs}
      className={className}
      style={{
        ...animationStyles,
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}