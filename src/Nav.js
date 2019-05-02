import React from 'react';
import Avatar from './Avatar';
import NavLink from './navLink';
import SocialLinks from './SocialLinks';

const Nav = (props) => {  
  let menuClass;

  if(props.togglerOpen === true) {
    menuClass = "menu-bar show-nav";
  } else {
    menuClass = "menu-bar";
  }

  return(
    <nav className={ menuClass }>
      <Avatar/>
      <div className="nav-link-wrapper">
        <NavLink currentPage={props.currentPage} setPage={props.setPage} name="About"/>

        <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Skills"/>

        {/* <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Work"/> */}

        <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Contact"/>

        <SocialLinks />
      </div>
    </nav>
  )
}

export default Nav;