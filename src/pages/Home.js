import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <p className="h1 text-orange-400 mb-4">
        <FontAwesomeIcon icon={faTerminal} />
      </p>
      <p className="text-lg">Hello, I'm David, from Brighton in the UK. Pleased to meet you.</p>
      <p>I'm a front-end developer with a keen eye for detail and a passion for making performant, intuitive web applications and websites that are accessible to everybody.</p>
      <p>I've worked within agencies since 2019, and pride myself on being friendly, dedicated and reliable, with excellent communication skills.</p>
      <p>Check out my <NavLink to="/skills" className="text-orange-400">skills</NavLink> and <NavLink to="/work" className="text-orange-400">work history</NavLink> to see if I can help you build something great.</p>
    </div>
  )
}

export default Home;
