import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="o-content">
      <h1 className="text-orange-400 mb-4">
        <FontAwesomeIcon icon={faBug} className="o-content__icon"/>
        404: not found
      </h1>

      <p className="u-lede">
        Dang, the page you're looking for doesn't exist.
      </p>
      <p><NavLink to="/">Return to the homepage</NavLink>.</p>
    </div>
  )
};

export default NotFound;
