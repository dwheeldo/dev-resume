import React from 'react';
import Avatar from './Avatar';
import NavToggler from './NavToggler';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';

const Nav = (props) => {

  return (
    <header role="banner" className="c-nav">
      <div className="c-nav__wrapper">
        <Avatar />
        <nav role="navigation" className="c-nav__links">
          <NavLink currentPage={props.currentPage} setPage={props.setPage} name="About" />

          <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Skills" />

          <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Work History" />

          <NavLink currentPage={props.currentPage} setPage={props.setPage} name="Contact" />

          <SocialLinks />
        </nav>
      </div>
      <NavToggler toggleNav={props.toggleNav} />
    </header>
  )
}

export default Nav;
