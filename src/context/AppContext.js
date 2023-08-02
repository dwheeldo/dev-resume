import { createContext, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/work', label: 'Work history' },
    { path: '/contact', label: 'Contact' },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setDeviceWidth(window.innerWidth);
    }, 200);

    // Check if body scroll should be locked
    if (navOpen && deviceWidth < 768) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Set up resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up resize listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [deviceWidth, navOpen]);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const context = {
    navItems,
    navOpen,
    toggleNav,
    closeNav
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}
