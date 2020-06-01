import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = (props) => {

  return (
    <NavLink
      className="c-nav__link"
      activeClassName="c-nav__link--active"
      to={props.to}
      exact
      onClick={props.closeNav}
    >
      {props.name}
    </NavLink>
  )
}

export default NavItem;
