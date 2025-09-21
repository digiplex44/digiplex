"use client"
import { useState } from 'react';

export const useSearchToggle = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const openSearch = () => setIsSearchActive(true);
  const closeSearch = () => setIsSearchActive(false);
  const toggleSearch = () => setIsSearchActive(!isSearchActive);

  return {
    isSearchActive,
    openSearch,
    closeSearch,
    toggleSearch
  };
};