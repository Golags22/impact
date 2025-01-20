'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/blog', label: 'Blog' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/donate', label: 'Donate' },
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle route changes and set active link
  useEffect(() => {
    if (!router) return; // Ensure router is available

    const handleRouteChange = (url) => {
      setActiveLink(url);
    };

    // Set the initial active link
    setActiveLink(router.asPath);

    // Only attach the event listener if the router is ready
    router.events?.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#003B65] shadow-lg' : 'bg-transparent pt-0'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="/" aria-label="Home">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-white text-xl font-semibold">Impact for Success Foundation</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link href={href} key={href} className={`text-white relative group ${activeLink === href ? 'font-semibold' : ''}`}>
              <span className="relative z-10">{label}</span>

              {/* Animated underline */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-white transform transition-all duration-300 ${
                  activeLink === href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />

              {/* Hover effect for the underline */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-all duration-300 group-hover:scale-x-100`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen ? 'true' : 'false'}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-blue-800 p-4 mt-4">
          {navLinks.map(({ href, label }) => (
            <Link href={href} key={href} onClick={() => setIsOpen(false)} className={`text-white ${activeLink === href ? 'font-semibold' : ''}`}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
