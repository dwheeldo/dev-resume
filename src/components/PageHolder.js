import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const PageHolder = (props) => {
  let showPage;
  
  if(props.currentPage === 'about') {
    showPage = <About />;
  } else if(props.currentPage === 'skills') {
    showPage = <Skills />;
  } else if(props.currentPage === 'work') {
    showPage = <Work />;
  } else if(props.currentPage === 'contact') {
    showPage = <Contact />;
  }
  
  return(
    <div className="container">
      <Header />
      {showPage}
    </div>
  )
  
}

export default PageHolder;