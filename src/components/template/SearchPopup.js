"use client"

import { useState } from 'react';

export const SearchPopup = ({ isActive, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implémenter la logique de recherche ici
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className={`search-wrap ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-row">
            <form onSubmit={handleSearch} className="d-flex w-100">
              <input 
                type="text" 
                className="form-control form-control-lg h-100 border-0 shadow-none fs-22 ps-0" 
                placeholder="Search everything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus={isActive}
              />
              <button 
                type="button"
                className="btn btn-lg text-gray-900 border-0" 
                id="close-search"
                onClick={onClose}
                aria-label="Close search"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="35" 
                  height="35" 
                  fill="currentColor" 
                  className="bi bi-x" 
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};