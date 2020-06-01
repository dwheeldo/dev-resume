import React from 'react';
import NavItem from './NavItem';
import SocialLinks from './SocialLinks';
import avatarImage from '../img/dave-web.jpg';

const Nav = (props) => {

  return (
    <header role="banner" className="c-nav">
      <div className="c-nav__wrapper">
        <div className="c-nav__avatar">
          <img className="c-nav__avatar__img" src={avatarImage} alt="Me" />
        </div>

        <nav role="navigation" className="c-nav__links">
          <NavItem to="/" name="Home" closeNav={props.closeNav} />

          <NavItem to="/skills" name="Skills" closeNav={props.closeNav} />

          <NavItem to="/work" name="Work History" closeNav={props.closeNav} />

          <NavItem to="/contact" name="Contact" closeNav={props.closeNav} />

          <SocialLinks />
        </nav>
      </div>

      <button className="c-nav__toggle" onClick={props.toggleNav}>
        <span className="c-nav__toggle__bars"></span>
      </button>
    </header>
  )
}

export default Nav;
