import React from 'react';

const NavToggler = (props) => {

  return (
    <button className="c-nav__toggle" onClick={props.toggleNav}>
      <span className="c-nav__toggle__bars"></span>
    </button>
  )
}

export default NavToggler;
