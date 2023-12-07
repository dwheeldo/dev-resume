import { createContext, useState, useEffect } from 'react';
import type { NavItemType, SkillType } from '../types/interfaces';
import debounce from 'lodash.debounce';

export const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const navItems: NavItemType[] = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/skills', label: 'Skills' },
    { path: '/work', label: 'Work history' },
    { path: '/contact', label: 'Contact' },
  ];

  const skills: SkillType[] = [
    {
      id: 1,
      content: 'Responsive web development using <span className="text-orange-400">HTML</span> and <span className="text-orange-400">CSS/SCSS</span>'
    },
    {
      id: 2,
      content: 'Modern <span className="text-orange-400">JavaScript</span> (ES6+) and <span className="text-orange-400">TypeScript</span>'
    },
    {
      id: 3,
      content: 'Building user interfaces with <span className="text-orange-400">Vue</span> and <span className="text-orange-400">React</span>'
    },
    {
      id: 4,
      content: 'Sending and retrieving data from <span className="text-orange-400">REST APIs</span>'
    },
    {
      id: 5,
      content: 'Building and configuring <span className="text-orange-400">Craft CMS</span> sites'
    },
    {
      id: 6,
      content: 'State management &ndash; <span className="text-orange-400">Vuex</span>, <span className="text-orange-400">Pinia</span>, <span className="text-orange-400">Redux</span>'
    },
    {
      id: 7,
      content: 'Package managers &ndash; <span className="text-orange-400">NPM</span>, <span className="text-orange-400">Yarn</span>, <span className="text-orange-400">Composer</span>'
    },
    {
      id: 8,
      content: '<span className="text-orange-400">Git</span> version control'
    },
    {
      id: 9,
      content: 'Configuring build tools &ndash; <span className="text-orange-400">Vite</span>, <span className="text-orange-400">Webpack</span>, <span className="text-orange-400">Rollup</span>'
    },
  ]

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
    skills,
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
