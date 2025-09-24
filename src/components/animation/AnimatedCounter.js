"use client"

import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { useEffect, useState } from "react";

export default function AnimatedCounter ({ 
  start = 0,
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  threshold = 0.5,
  className = '',
  style = {}
}) {
  const [ref, isVisible] = useIntersectionAnimation({ threshold });
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = start;
    const endValue = end;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count}{suffix}
    </span>
  );
};