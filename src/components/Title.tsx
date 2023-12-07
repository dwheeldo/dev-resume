import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  text: string;
  icon?: IconProp;
}

const Title = ({text, icon}: Props) => {
  return (
    <h1 className="text-orange-400 mb-4">
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </h1>
  )
}

export default Title;
