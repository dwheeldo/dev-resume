import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon">
        <FontAwesomeIcon icon={faPaperPlane} />
      </p>
      <p>The best way to get in touch with me is to connect on <a href="https://www.linkedin.com/in/david-wheeldon-7043b516b" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://github.com/dwheeldo" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  )
}

export default Contact;
