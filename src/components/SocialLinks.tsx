import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const socialLinks = () => {
  const classes = 'text-3xl block hover:text-orange-400 leading-none';

  return (
    <div className="flex justify-center mt-8 mb-1">
      <a href="https://github.com/dwheeldo" target="_blank" rel="noopener noreferrer" className={classes}>
        <FontAwesomeIcon icon={faGithub} />
        <span className="sr-only">Github</span>
      </a>

      <a href="https://www.linkedin.com/in/david-wheeldon-7043b516b" target="_blank" rel="noopener noreferrer" className={`${classes} ml-4`}>
        <FontAwesomeIcon icon={faLinkedin} />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
  )
}

export default socialLinks;
