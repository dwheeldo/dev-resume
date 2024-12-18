import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { MetaTitle } from '../components/MetaTitle';

const Home = () => {
  return (
    <div className="">
      <MetaTitle title="Home" />
      <p className="h1 text-orange-400 mb-4">
        <FontAwesomeIcon icon={faTerminal} />
      </p>

      <p className="text-lg">
        Hello, I'm Dave, from Brighton in the UK. Pleased to meet you.
      </p>

      <p>
        I'm a dedicated and detail-oriented developer, passionate about creating
        high-performance, user-friendly web applications and sites.
      </p>

      <p>
        Check out my{' '}
        <NavLink to="/portfolio" className="text-orange-400">
          portfolio
        </NavLink>{' '}
        and{' '}
        <NavLink to="/work" className="text-orange-400">
          work history
        </NavLink>{' '}
        to see if I can help you build something great.
      </p>
    </div>
  );
};

export default Home;
