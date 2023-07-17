import { useState } from 'react';

import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  const [navOpen, setNavOpen] = useState(false);
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
      <div className={navOpen ? 'o-wrapper is-visible--mobile-menu' : 'o-wrapper bg-slate-800 text-gray-100'}>
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
