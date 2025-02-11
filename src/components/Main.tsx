import { Routes, Route, useLocation, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import { useLayoutEffect, useMemo } from 'react';

const Main = () => {
  const { pathname } = useLocation();

  const HeadingEl = useMemo(() => {
    return pathname === '/' ? 'h1' : 'p';
  }, [pathname]);

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="w-full max-w-screen-md mx-auto px-4 py-8 md:p-8 lg:p-12">
      <div className="pb-4 mb-8 border-b border-orange-400 border-dashed">
        <NavLink
          to="/"
          className="block mb-1 no-underline"
          aria-label="Navigate to homepage"
        >
          <HeadingEl className="h1">Dave Wheeldon</HeadingEl>
        </NavLink>
        <p className="text-lg leading-none lg:text-xl">Front-end Developer</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
