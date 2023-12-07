import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Work from '../pages/Work';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const Main = () => {
  const location = useLocation();

  const headingEl =
    location.pathname === '/'
      ? <h1 className='mb-1'>Dave Wheeldon</h1>
      : <p className="h1 mb-1">Dave Wheeldon</p>;

  return (
    <main className="w-full max-w-screen-md mx-auto px-4 py-8 md:p-8 lg:p-12">
      <div className="pb-4 mb-6 border-b border-orange-400 border-dashed">
        {headingEl}
        <p className="text-lg leading-none lg:text-xl">Front-end Developer</p>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )

}

export default Main;
