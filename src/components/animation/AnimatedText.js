"use client"

import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

export default function AnimatedText ({ 
  text,
  wordDelay = 100,
  threshold = 0.1,
  className = '',
  style = {},
  as: Component = 'span'
}) {
  const [ref, isVisible] = useIntersectionAnimation({ threshold });

  return (
    <Component ref={ref} className={className} style={style}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          style={{ 
            display: 'inline-block',
            marginRight: '0.3em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
            transition: `all 0.6s ease-out ${index * wordDelay}ms`
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};