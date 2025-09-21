"use client"
import { useEffect, useState } from 'react';

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27 && isSidebarOpen) {
        closeSidebar();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.id === 'sidebar-overlay') {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
      document.body.classList.add('open-sidebar');
    } else {
      document.body.classList.remove('open-sidebar');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      document.body.classList.remove('open-sidebar');
    };
  }, [isSidebarOpen]);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar
  };
};