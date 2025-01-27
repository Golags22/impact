import React, { useEffect, useState } from 'react';
import Loading from './Loader';  // Your custom loader component

const SessionLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has visited before in this session
    const isFirstVisit = sessionStorage.getItem('isFirstVisit');

    if (!isFirstVisit) {
      // It's the user's first visit, show loader
      sessionStorage.setItem('isFirstVisit', 'true');
      setIsLoading(true);
    } else {
      // Not the first visit, no loader needed
      setIsLoading(false);
    }

    // After the page is loaded, we set the loader to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);  // Optional: Set a delay for the loader (e.g., 3 seconds)

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loading /> : children;
};

export default SessionLoader;
