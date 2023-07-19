import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="">
      <h1 className="text-orange-400 mb-4">
        <FontAwesomeIcon icon={faBug} className="mr-2"/>
        404: not found
      </h1>

      <p className="text-lg">
        Dang, the page you're looking for doesn't exist.
      </p>
      <p><NavLink to="/" className="text-orange-400">Return to the homepage</NavLink>.</p>
    </div>
  )
};

export default NotFound;
