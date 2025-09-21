"use client"

import Link from 'next/link';
import Image from 'next/image';

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div 
      id="sidebar-area" 
      className={`sidebar-area transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
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

          {/* Close Button */}
          <button 
            className="sidebar-trigger close"
            onClick={onClose}
          >
            <i className="fi-rr-cross"></i>
          </button>
        </div>

        <div className="side-menu-wrap"></div>

        <div className="side-menu-about">
          <div className="side-menu-header">
            <h3>About Us</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link href="/contact" className="theme-btn">
            Contact Us
          </Link>
        </div>

        <div className="side-menu-contact">
          <div className="side-menu-header">
            <h3>Contact Us</h3>
          </div>
          <ul className="side-menu-list">
            <li>
              <i className="fi-rr-marker"></i>
              <span>Norway, Street Road 24, Oslo</span>
            </li>
            <li>
              <i className="fi-rr-phone-call"></i>
              <Link href="tel:+000123456789">+000 123 (456) 789</Link>
            </li>
            <li>
              <i className="fi-rr-envelope"></i>
              <Link href="mailto:contact@gmail.com">contact@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};