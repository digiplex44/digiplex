"use client"

import { useLoader } from '@/hooks/useLoader';

export const Loader = ({ children }) => {
  const isLoading = useLoader(800);

  if (isLoading) {
    return (
      <div className="preloader fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="line-loader"></div>
      </div>
    );
  }

  return children;
};
