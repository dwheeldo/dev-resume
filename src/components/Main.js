import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const Main = () => {
  const location = useLocation();

  const headingEl =
    location.pathname === '/'
      ? <h1>David Wheeldon</h1>
      : <p className="h1">David Wheeldon</p>;

  return (
    <main className="o-main">
      {headingEl}
      <p className="h2">Front End Developer</p>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound />}/>
        <Route default element={<Home />} />
      </Routes>
    </main>
  )

}

export default Main;
