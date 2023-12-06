import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Project = ({ projectName, projectDate, imageName, imageAltText, children }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg lg:text-xl mb-1">{projectName}</h2>
      <p className="text-orange-400">
        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
        {projectDate}
      </p>

      {children}

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
