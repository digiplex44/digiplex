"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Sidebar = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const toggleDropdown = (menuName) => {
    setOpenDropdown(prev => prev === menuName ? null : menuName);
  };

  return (
    <div
      id="sidebar-area"
      className={`sidebar-area transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="side-menu-content">
        <div className="side-menu-top">
          {/* Logo */}
          <div className="side-menu-logo">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* Close */}
          <button className="sidebar-trigger close" onClick={onClose}>
            <i className="fi-rr-cross"></i>
          </button>
        </div>

        <div className="side-menu-wrap mean-container">
          <div className="mean-bar">
            <a
              href="#nav"
              className="meanmenu-reveal"
              style={{
                right: '0px',
                left: 'auto',
                display: 'inline-block'
              }}
            >
              <span>
                <span>
                  <span></span>
                </span>
              </span>
            </a>
            <nav className="mean-nav">
              <ul style={{ display: 'block' }}>
                <li className={openDropdown === 'home' ? 'dropdown-opened' : ''}>
                  <a href="javascript:void(0)">Home</a>
                  <ul style={{ 
                    display: openDropdown === 'home' ? 'block' : 'none',
                    transition: 'all 0.3s ease-in-out',
                    opacity: openDropdown === 'home' ? '1' : '0',
                    maxHeight: openDropdown === 'home' ? '200px' : '0',
                    overflow: 'hidden'
                  }}>
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Two</a>
                    </li>
                  </ul>
                  <a
                    className={`mean-expand ${openDropdown === 'home' ? 'mean-clicked' : ''}`}
                    href="#"
                    style={{ 
                      fontSize: '30px',
                      transform: openDropdown === 'home' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('home');
                    }}
                  >
                    <i className="fi-rr-angle-down"></i>
                  </a>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>

                <li className={openDropdown === 'services' ? 'dropdown-opened' : ''}>
                  <a href="javascript:void(0)">Services</a>
                  <ul style={{ 
                    display: openDropdown === 'services' ? 'block' : 'none',
                    transition: 'all 0.3s ease-in-out',
                    opacity: openDropdown === 'services' ? '1' : '0',
                    maxHeight: openDropdown === 'services' ? '200px' : '0',
                    overflow: 'hidden'
                  }}>
                    <li>
                      <a href="service.html">Service</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                  <a
                    className={`mean-expand ${openDropdown === 'services' ? 'mean-clicked' : ''}`}
                    href="#"
                    style={{ 
                      fontSize: '30px',
                      transform: openDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('services');
                    }}
                  >
                    <i className="fi-rr-angle-down"></i>
                  </a>
                </li>

                <li className={openDropdown === 'portfolios' ? 'dropdown-opened' : ''}>
                  <a href="javascript:void(0)">Portfolios</a>
                  <ul style={{ 
                    display: openDropdown === 'portfolios' ? 'block' : 'none',
                    transition: 'all 0.3s ease-in-out',
                    opacity: openDropdown === 'portfolios' ? '1' : '0',
                    maxHeight: openDropdown === 'portfolios' ? '200px' : '0',
                    overflow: 'hidden'
                  }}>
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">Portfolio Details</a>
                    </li>
                  </ul>
                  <a
                    className={`mean-expand ${openDropdown === 'portfolios' ? 'mean-clicked' : ''}`}
                    href="#"
                    style={{ 
                      fontSize: '30px',
                      transform: openDropdown === 'portfolios' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('portfolios');
                    }}
                  >
                    <i className="fi-rr-angle-down"></i>
                  </a>
                </li>

                <li className={openDropdown === 'pages' ? 'dropdown-opened' : ''}>
                  <a href="javascript:void(0)">Pages</a>
                  <ul style={{ 
                    display: openDropdown === 'pages' ? 'block' : 'none',
                    transition: 'all 0.3s ease-in-out',
                    opacity: openDropdown === 'pages' ? '1' : '0',
                    maxHeight: openDropdown === 'pages' ? '300px' : '0',
                    overflow: 'hidden'
                  }}>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="404.html">404 Error</a>
                    </li>
                  </ul>
                  <a
                    className={`mean-expand ${openDropdown === 'pages' ? 'mean-clicked' : ''}`}
                    href="#"
                    style={{ 
                      fontSize: '30px',
                      transform: openDropdown === 'pages' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('pages');
                    }}
                  >
                    <i className="fi-rr-angle-down"></i>
                  </a>
                </li>

                <li className={openDropdown === 'blogs' ? 'dropdown-opened' : ''}>
                  <a href="javascript:void(0)">Blogs</a>
                  <ul style={{ 
                    display: openDropdown === 'blogs' ? 'block' : 'none',
                    transition: 'all 0.3s ease-in-out',
                    opacity: openDropdown === 'blogs' ? '1' : '0',
                    maxHeight: openDropdown === 'blogs' ? '200px' : '0',
                    overflow: 'hidden'
                  }}>
                    <li>
                      <a href="blog-single-grid.html">Blog Single Grid</a>
                    </li>
                    <li>
                      <a href="blog-grid-2column.html">Blog Grid 2 Column</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                  <a
                    className={`mean-expand ${openDropdown === 'blogs' ? 'mean-clicked' : ''}`}
                    href="#"
                    style={{ 
                      fontSize: '30px',
                      transform: openDropdown === 'blogs' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('blogs');
                    }}
                  >
                    <i className="fi-rr-angle-down"></i>
                  </a>
                </li>

                <li className="mean-last">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="side-menu-contact">
          <ul className="side-menu-list">
            <li style={{ color: 'transparent' }}>
              <a>very long text because i lack skills</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};