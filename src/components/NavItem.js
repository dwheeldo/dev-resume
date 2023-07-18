import { NavLink } from "react-router-dom";

const NavItem = ({ to, name, closeNav }) => {

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-item text-orange-400" : "nav-item hover:text-orange-400"
      }
      to={to}
      onClick={closeNav}
    >
      {name}
    </NavLink>
  )
}

export default NavItem;
