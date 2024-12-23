'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = typeof window !== 'undefined' ? useRouter() : null; // Ensure safe usage of useRouter
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Track active link
  const [isOpen, setIsOpen] = useState(false);

  // Function to monitor scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update active link on route change
  useEffect(() => {
    if (router) {
      const handleRouteChange = (url) => {
        setActiveLink(url);
      };

      // Listen to route changes
      router.events?.on('routeChangeComplete', handleRouteChange);

      // Set the initial active link
      setActiveLink(window.location.pathname);

      return () => {
        router.events?.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900 shadow-lg' : 'bg-transparent pt-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-white text-xl font-semibold">
              Impact for Success Foundation
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/projects', label: 'Projects' },
            { href: '/get-involved', label: 'Get Involved' },
            { href: '/donate', label: 'Donate' },
            { href: '/blog', label: 'Blog' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              className={`text-white relative group`}
            >
              <span className="relative z-10">{label}</span>
               {/* Animated bar */}
      <div
        className={`absolute bottom-0 top-6 left-0 w-0 h-1 bg-white transition-width duration-300 ${
          activeLink === href ?'group-hover:none':'group-hover:w-full'
        }`}
      />
              {/* Bar under active link */}
              <div
                className={`absolute bottom-0 top-6 left-0 w-full h-1 bg-white transform transition-transform duration-300 ${
                  activeLink === href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-blue-800 p-4 mt-4">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/projects', label: 'Projects' },
            { href: '/get-involved', label: 'Get Involved' },
            { href: '/donate', label: 'Donate' },
            { href: '/blog', label: 'Blog' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              onClick={handleLinkClick} // Close menu on click
              className={`text-white ${activeLink === href ? 'font-semibold' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
