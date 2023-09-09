import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to handle changes to the browser's dark mode preference
  const handleDarkModeChange = (event) => {
    setDarkMode(event.matches);
  };

  useEffect(() => {
    // Check the local storage to see if dark mode was previously enabled
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModeEnabled);

    // Listen for changes to the browser's dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  // Function to toggle dark mode and save the preference in local storage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector("body").className = darkMode ? '' : 'dark-mode'
  };

  return [ darkMode, toggleDarkMode ];
};

