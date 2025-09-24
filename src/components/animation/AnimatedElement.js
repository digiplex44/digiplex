'use client'
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

export default function AnimatedElement ({ 
  children, 
  animation = 'slideUp',
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  style = {},
  as: Component = 'div',
  ...props 
}) {
  const [ref, isVisible] = useIntersectionAnimation({
    threshold,
    triggerOnce,
    delay
  });

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

  return (
    <Component
      ref={ref}
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
};