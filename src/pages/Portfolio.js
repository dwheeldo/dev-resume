import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Title from '../components/Title';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <Title text="Portfolio" icon={faBriefcase} />

      <p>A selection of projects I've enjoyed working on.</p>

      <hr className="border-dashed border-orange-400 my-6"/>

      <Project
        projectName="Rights of Women"
        projectDate="June 2021 - June 2023"
        imageName="row_dt"
        imageAltText="Rights of Women screenshot"
      >
        <div>
          <p>An online advice platform for the organisation Rights of Women, to record their attendance note data from the phone calls received by their advice lines.</p>
          <p>The front-end of the web app is built with Vue. The backend of the application uses Laravel.</p>
          <p>I created and maintained the front end of the application.</p>
          <p><a href="https://cms.rightsofwomen.org.uk/" target="_blank" rel="noopener noreferrer">Visit site</a></p>

          <p>Technologies used:</p>

          <ul className="list-disc ml-4">
            <li>Vue JS</li>
            <li>Vuex</li>
            <li>SCSS</li>
            <li>Laravel</li>
            <li>Websockets</li>
          </ul>
        </div>
      </Project>

      <hr className="border-dashed border-orange-400 my-6"/>

      <Project
        projectName="Dark Horses"
        projectDate="Jan - March 2023"
        imageName="dh_website_dt"
        imageAltText="Dark Horses website screenshot"
      >
        <div>
          <p>Website for the psych-rock band Dark Horses.</p>
          <p><a href="https://www.darkhorsesmusic.com" target="_blank" rel="noopener noreferrer">Visit site</a></p>

          <p>Technologies used:</p>

          <ul className="list-disc ml-4">
            <li>11ty and Markdown to render the HTML</li>
            <li>Tailwind CSS for styling</li>
            <li>A sprinkling of JS for interactivity</li>
            <li>Cloudinary for image hosting</li>
          </ul>
        </div>
      </Project>

      <hr className="border-dashed border-orange-400 my-6"/>

      <Project
        projectName="Army Cadet Force"
        projectDate="Jan - June 2021"
        imageName="acf_dt"
        imageAltText="Army Cadets website screenshot"
      >
        <div>
          <p>Website for the Army Cadet Force.</p>
          <p>The site also features a complex Vue app for managing applications to join the cadets, which interacts with a headless Laravel API.</p>
          <p><a href="https://armycadets.com/" target="_blank" rel="noopener noreferrer">Visit site</a></p>

          <p>Technologies used:</p>

          <ul className="list-disc ml-4">
            <li>Craft CMS</li>
            <li>Twig templating engine</li>
            <li>SCSS</li>
            <li>Vue JS</li>
            <li>AWS for image and file hosting</li>
          </ul>
        </div>
      </Project>
    </div>
  )
}

export default Portfolio;
