import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="o-content">
      <p className="o-content__icon">
        <FontAwesomeIcon icon={faPaperPlane} />
      </p>
      <p>One of the golden rules of the internet is not to leave your personal details lying around.</p>
      <p>With that in mind, the best way to get in touch with me is to connect on <a href="https://www.linkedin.com/in/david-wheeldon-7043b516b" target="_blank" rel="noopener noreferrer" >LinkedIn</a> or <a href="https://github.com/dwheeldo" target="_blank" rel="noopener noreferrer" >GitHub</a> – where you'll also find the latest projects I'm working on.</p>
    </div>
  )
}

export default Contact;
