import React from 'react';

const NavToggler = (props) => {
  let barClass;

  if(props.togglerOpen === true) {
    barClass = "icon-bar open";
  } else {
    barClass = "icon-bar";
  }
  
  return(
    <button className="nav-toggler" onClick={props.toggleNav}>
      <span className={barClass}></span>
      <span className={barClass}></span>
      <span className={barClass}></span>
    </button>
  )
}

export default NavToggler;