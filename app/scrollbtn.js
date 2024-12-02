'use client'
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all animate-bounce"
        style={{ zIndex: 1000 }} // Ensures the button appears on top
      >
        <div className="flex-shrink-0 w-10 h-10">
          <img 
            src="/logo.png" 
            alt="Scroll to top" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
      </button>
    )
  );
};

export default ScrollToTopButton;
