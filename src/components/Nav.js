import NavItem from './NavItem';
import SocialLinks from './SocialLinks';
import avatarImage from '../img/dave-web.jpg';

const Nav = ({ navItems, closeNav, toggleNav }) => {

  const renderedNavItems = navItems.map((item) => {
    return <NavItem key={item.label} to={item.path} name={item.label} closeNav={closeNav} />;
  });

  return (
    <header role="banner" className="header">
      <div className="nav-wrapper">
        <div className="max-w-[12rem] mx-auto mb-4">
          <img className="block max-w-full rounded-full overflow-hidden" src={avatarImage} alt="Me" />
        </div>

        <nav role="navigation" className="mt-8">
          <div className="flex flex-col items-center -mb-3">
            {renderedNavItems}
          </div>

          <SocialLinks />
        </nav>
      </div>

      <div className="absolute top-4 right-4">
        <button className="nav-toggle flex-shrink-0" onClick={toggleNav}>
          <span className="nav-toggle__bars"></span>
        </button>
      </div>
    </header>
  )
}

export default Nav;
