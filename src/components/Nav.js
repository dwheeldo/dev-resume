import NavItem from './NavItem';
import SocialLinks from './SocialLinks';
import avatarImage from '../img/dave-web.jpg';

const Nav = ({ navItems, closeNav, toggleNav }) => {

  const renderedNavItems = navItems.map((item) => {
    return <NavItem key={item.label} to={item.path} name={item.label} closeNav={closeNav} />;
  });

  return (
    <header role="banner" className="c-nav bg-slate-700">
      <div className="c-nav__wrapper bg-slate-900 md:bg-transparent">
        <div className="c-nav__avatar">
          <img className="c-nav__avatar__img" src={avatarImage} alt="Me" />
        </div>

        <nav role="navigation" className="c-nav__links">
          {renderedNavItems}

          <SocialLinks />
        </nav>
      </div>

      <button className="c-nav__toggle" onClick={toggleNav}>
        <span className="c-nav__toggle__bars"></span>
      </button>
    </header>
  )
}

export default Nav;
