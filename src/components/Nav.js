import React from 'react';
import Avatar from './Avatar';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';

const Nav = (props) => {

  return(
    <nav className="menu-bar">
      <Avatar/>
      <div className="nav-link-wrapper">
        <NavLink currentPage={props.currentPage} setPage={props.setPage} name="About"/>

        <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Skills"/>

        <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Work History"/>

        <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Contact"/>

        <SocialLinks />
      </div>
    </nav>
  )
}

export default Nav;