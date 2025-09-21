"use client"

import { useCustomCursor } from '@/hooks/useCustomCursor';

export const CustomCursor = () => {
  const cursorRef = useCustomCursor();

  return (
    <div id="custom-mouse">
      <div 
        ref={cursorRef}
        id="cursor-ball"
        className="fixed w-10 h-10 border border-gray-300 rounded-full pointer-events-none z-50"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.4s ease'
        }}
      />
    </div>
  );
};
