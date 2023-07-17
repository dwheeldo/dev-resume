import { NavLink } from "react-router-dom";

const NavItem = ({ to, name, closeNav }) => {

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "c-nav__link text-orange-400" : "c-nav__link hover:text-orange-400"
      }
      to={to}
      onClick={closeNav}
    >
      {name}
    </NavLink>
  )
}

export default NavItem;
