import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const socialLinks = () => {
  const getClasses = (first = false) => {
    let classes = 'text-3xl inline-block hover:text-orange-400';

    if (first) {
      classes += ' mr-4'
    }

    return classes;
  };

  return (
    <div className="c-nav__socials">
      <a href="https://github.com/dwheeldo" target="_blank" rel="noopener noreferrer" className={getClasses(true)}>
        <FontAwesomeIcon icon={faGithub} />
        <span className="u-a11y">Github</span>
      </a>

      <a href="https://www.linkedin.com/in/david-wheeldon-7043b516b" target="_blank" rel="noopener noreferrer" className={getClasses()}>
        <FontAwesomeIcon icon={faLinkedin} />
        <span className="u-a11y">LinkedIn</span>
      </a>
    </div>
  )
}

export default socialLinks;
