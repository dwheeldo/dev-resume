import { NavLink } from "react-router-dom";

const NavItem = ({ to, name, closeNav }) => {

  return (
    <NavLink
      className={({ isActive }) => {
        let classes = 'text-center no-underline mb-3';

        if (isActive) {
          return classes + ' text-orange-400';
        }
        return classes + ' hover:text-orange-400'
      }}
      to={to}
      onClick={closeNav}
    >
      {name}
    </NavLink>
  )
}

export default NavItem;
