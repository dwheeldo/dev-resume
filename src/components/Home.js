import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon">
        <FontAwesomeIcon icon={faTerminal} />
      </p>
      <p className="u-lede">Hello, I'm David, from Brighton in the UK. Pleased to meet you.</p>
      <p>I'm a front-end developer with a keen eye for detail and a passion for making performant, intuitive web applications and websites that are accessible to everybody.</p>
      <p>I've worked within agencies since 2019, and pride myself on being friendly, dedicated and reliable, with excellent communication skills.</p>
    </div>
  )
}

export default Home;
