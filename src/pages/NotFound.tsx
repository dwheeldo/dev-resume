import { NavLink } from 'react-router-dom';
import Title from '../components/Title';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="">
      <Title text="404: not found" icon={faBug} />

      <p className="text-lg">
        Dang, the page you're looking for doesn't exist.
      </p>
      <p>
        <NavLink to="/" className="text-orange-400">
          Return to the homepage
        </NavLink>
        .
      </p>
    </div>
  );
};

export default NotFound;
