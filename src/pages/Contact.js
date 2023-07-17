import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="o-content">
      <h1 className="text-orange-400 mb-4">
        <FontAwesomeIcon icon={faPaperPlane} className="o-content__icon"/>
        Contact
      </h1>
      <p>The best way to get in touch with me is to connect on <a href="https://www.linkedin.com/in/david-wheeldon-7043b516b" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://github.com/dwheeldo" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  )
}

export default Contact;
