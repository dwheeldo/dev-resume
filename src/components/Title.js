import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Title = ({icon, text}) => {
  return (
    <h1 className="text-orange-400 mb-4">
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </h1>
  )
}

export default Title;
