import useAppContext from '../hooks/use-app-context';
import NavItem from './NavItem';
import SocialLinks from './SocialLinks';
import avatarImage from '../img/dave-web.jpg';

const Nav = () => {
  const {
    navItems,
    navOpen,
    toggleNav,
  } = useAppContext();

  const renderedNavItems = navItems.map((item) => {
    return <NavItem key={item.label} to={item.path} name={item.label} />;
  });

  const headerClasses = navOpen ? 'header mobile-nav-open' : 'header';

  return (
    <header role="banner" className={headerClasses}>
      <div className="nav-wrapper">
        <div className="max-w-[12rem] mx-auto mb-4">
          <img className="block max-w-full rounded-full overflow-hidden" src={avatarImage} alt="Me" width="190" height="190" />
        </div>

        <nav role="navigation" className="mt-8">
          <div className="flex flex-col items-center -mb-3">
            {renderedNavItems}
          </div>

          <SocialLinks />
        </nav>
      </div>

      <div className="absolute top-8 right-4">
        <button className="nav-toggle flex-shrink-0" onClick={toggleNav}>
          <span className="nav-toggle__bars"></span>
          <span className="sr-only">{ navOpen ? 'Close menu' : 'Open menu' }</span>
        </button>
      </div>
    </header>
  )
}

export default Nav;
