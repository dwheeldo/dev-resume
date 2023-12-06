import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLink, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Project = ({
  projectName, projectDate, projectUrl, intro, imageName, imageAltText, children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const projectNameAsId = useMemo(() => {
    return `${projectName.toLowerCase().split(' ').join('_')}_panel`;
  }, [projectName]);

  const expandIcon = isExpanded ? faMinus : faPlus;

  return (
    <div className="mt-8 pt-6 border-t border-dashed border-orange-400">
      <h2 className="text-orange-400 text-lg lg:text-xl mb-4">{projectName}</h2>

      <div className="mb-4">
        <p>
          <FontAwesomeIcon icon={faCalendar} className="mr-2 w-4 h-4" />
          {projectDate}
        </p>

        {projectUrl &&
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} className="mr-2 w-4 h-4" />
            Visit site
          </a>
        }
      </div>

      <p>{intro}</p>

      <div className={`mt-4 ${!isExpanded ? 'hidden' : ''}`} id={projectNameAsId}>
        {children}
      </div>

      <div className="mt-4">
        <button
          className="underline text-orange-400"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls={projectNameAsId}
          aria-expanded={isExpanded}
        >
          <FontAwesomeIcon icon={expandIcon} className="mr-2" />
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      </div>

      <picture>
        <source type="image/webp" srcSet={`
          https://res.cloudinary.com/dosdlkfci/image/upload/c_scale,w_400/${imageName}.webp 400w,
          https://res.cloudinary.com/dosdlkfci/image/upload/c_scale,w_600/${imageName}.webp 600w,
          https://res.cloudinary.com/dosdlkfci/image/upload/c_scale,w_800/${imageName}.webp 800w
        `} />

        <img
          src={`https://res.cloudinary.com/dosdlkfci/image/upload/c_scale,w_800/${imageName}.jpg`}
          srcSet={`
            https://res.cloudinary.com/dosdlkfci/image/upload/c_scale,w_400/${imageName}.jpg 400w,
            https://res.cloudinary.com/dosdlkfci/image/upload/c_scale,w_600/${imageName}.jpg 600w,
            https://res.cloudinary.com/dosdlkfci/image/upload/c_scale,w_800/${imageName}.jpg 800w
          `}
          sizes="100vw"
          width="800"
          height="450"
          alt={imageAltText}
          className="block mt-4"
          loading="lazy"
          decoding="async" />
      </picture>
    </div>
  )
}

export default Project;
