import React from 'react';

const NavLink = (props) => {
  let linkClass;
  
  if(props.name.toLowerCase() === props.currentPage) {
    linkClass = "nav-link nav-link--active";
  } else {
    linkClass = "nav-link";
  }
  
  return(
    <div className={ linkClass } onClick={props.setPage}>
      {props.name}
    </div>
  )
}

export default NavLink;