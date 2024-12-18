import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  name: string;
  closeNav: () => void;
}

const NavItem = ({ to, name, closeNav }: Props) => {
  return (
    <NavLink
      className={({ isActive }) => {
        let classes = 'text-center no-underline mb-3';

        if (isActive) {
          return classes + ' text-orange-400';
        }
        return classes + ' hover:text-orange-400';
      }}
      to={to}
      onClick={closeNav}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
