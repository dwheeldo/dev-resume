import React from 'react';

const NavLink = (props) => {
  let linkClass;

  if (props.name.toLowerCase() === props.currentPage) {
    linkClass = "c-nav__link c-nav__link--active";
  } else {
    linkClass = "c-nav__link";
  }

  return (
    <div className={linkClass} onClick={props.setPage}>
      {props.name}
    </div>
  )
}

export default NavLink;
