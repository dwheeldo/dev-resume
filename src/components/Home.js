import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon">
        <FontAwesomeIcon icon={faTerminal} />
      </p>
      <p className="u-lede">Hello, I'm David, from Brighton in the UK. Pleased to meet you, whoever you are.</p>
      <p>I'm a front end developer and I'm passionate about making nice looking, fast, easy-to-use websites and applications that are accessible to everybody.</p>
    </div>
  )
}

export default Home;
