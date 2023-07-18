import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import Nav from './components/Nav';
import Main from './components/Main';

function App() {
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

  const navItems = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/skills',
      label: 'Skills'
    },
    {
      path: '/work',
      label: 'Work history'
    },
    {
      path: '/contact',
      label: 'Contact'
    },
  ];

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
      <div className={navOpen ? 'md:flex is-visible--mobile-menu' : 'md:flex'}>
        <Nav
          navItems={navItems}
          toggleNav={handleNavToggle}
          closeNav={handleNavClose}
        />
        <Main />
      </div>
    );
}

export default App;
