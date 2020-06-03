import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const socialLinks = () => {
  return (
    <div className="c-nav__socials">
      <a href="https://github.com/dwheeldo" target="_blank" rel="noopener noreferrer" className="c-nav__socials__link">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://www.linkedin.com/in/david-wheeldon-7043b516b" target="_blank" rel="noopener noreferrer" className="c-nav__socials__link">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  )
}

export default socialLinks;
