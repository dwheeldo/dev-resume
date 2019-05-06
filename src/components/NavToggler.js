import React from 'react';

const NavToggler = (props) => {
  let barClass;

  if(props.togglerOpen === true) {
    barClass = "icon-bar open";
  } else {
    barClass = "icon-bar";
  }
  
  return(
    <div className="nav-toggler" onClick={props.toggleNav}>
      <span className={barClass}></span>
      <span className={barClass}></span>
      <span className={barClass}></span>
    </div>
  )
}

export default NavToggler;