import React from 'react';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const PageHolder = (props) => {
  let showPage;

  if (props.currentPage === 'about') {
    showPage = <About />;
  } else if (props.currentPage === 'skills') {
    showPage = <Skills />;
  } else if (props.currentPage === 'work history') {
    showPage = <Work />;
  } else if (props.currentPage === 'contact') {
    showPage = <Contact />;
  }

  return (
    <div role="main" className="o-main">
      <h1>David Wheeldon</h1>
      <h2>Front End Developer</h2>
      {showPage}
    </div>
  )

}

export default PageHolder;
