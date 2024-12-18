import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Title from '../components/Title';
import { MetaTitle } from '../components/MetaTitle';

const Contact = () => {
  return (
    <div className="">
      <MetaTitle title="Contact" />
      <Title text="Contact" icon={faPaperPlane} />

      <p>
        The best way to get in touch with me is to connect on{' '}
        <a
          href="https://www.linkedin.com/in/david-wheeldon-7043b516b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400"
        >
          LinkedIn
        </a>{' '}
        or{' '}
        <a
          href="https://github.com/dwheeldo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
