"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useScrollHeader } from '@/hooks/useScrollHeader';

export const Header = ({ onSearchClick, onSidebarClick }) => {
  const isSticky = useScrollHeader(100);

  return (
    <header 
      id="active-sticky" 
      className={`tc-header transition-all duration-300 ${isSticky ? 'sticky' : ''}`}
    >
      <div className="container">
        <div className="tc-header__inner">
          <div className="tc-header__wrapper">
            {/* Logo */}
            <div className="tc-header-logo">
              <Link href="/">
                <Image 
                  src="/assets/images/logo.svg" 
                  alt="logo" 
                  width={120}
                  height={40}
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="tc-header-nav mobile-menu-items">
              <ul className="tc-header-nav__menu">
                <li className="active">
                  <Link href="#" onClick={(e) => e.preventDefault()}>Home</Link>
                  <ul className="sub-menu">
                    <li className="active">
                      <Link href="/">Home One</Link>
                    </li>
                    <li><Link href="/home-2">Home Two</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Services</Link>
                  <ul className="sub-menu">
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/services/details">Service Details</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Portfolio</Link>
                  <ul className="sub-menu">
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/portfolio/details">Portfolio Details</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Pages</Link>
                  <ul className="sub-menu">
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="/team/details">Team Details</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/404">404 Error</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>Blog</Link>
                  <ul className="sub-menu">
                    <li><Link href="/blog">Blog Grid</Link></li>
                    <li><Link href="/blog/grid-2">Blog Grid 2 Column</Link></li>
                    <li><Link href="/blog/details">Blog Details</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Actions */}
          <div className="tc-header-actions">
            <button 
              onClick={onSearchClick}
              id="search-btn" 
              className="search-btn"
            >
              Search
            </button>
            {/* Hamburger */}
            <button 
              onClick={onSidebarClick}
              className="menu-btn sidebar-trigger open"
            >
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="25" fill="white" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M31 22H14V24H31V22Z" fill="black" />
                <path d="M38 27H21V29H38V27Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
