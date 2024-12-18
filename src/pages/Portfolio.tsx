import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Title from '../components/Title';
import Project from '../components/Project';
import { MetaTitle } from '../components/MetaTitle';

const Portfolio = () => {
  return (
    <div>
      <MetaTitle title="Portfolio" />
      <Title text="Portfolio" icon={faBriefcase} />

      <p>A selection of projects I've enjoyed working on.</p>

      <Project
        projectName="Rights of Women"
        projectDate="June 2021 - June 2023"
        projectUrl="https://cms.rightsofwomen.org.uk/"
        intro="An online advice platform for the organisation Rights of Women (ROW)."
        imageName="row_dt"
        imageAltText="Rights of Women screenshot"
      >
        <p>
          The application centres around an autosaving, multi-page form built
          with Vue, which enables ROW staff to record their attendance note data
          from the phone calls received by their advice lines.
        </p>

        <p>
          The form communicates with the Laravel back-end using a combination of
          API requests and websockets.
        </p>

        <p>
          I created and maintained the front-end of the application, and I was
          involved in making decisions on the technology we used and the overall
          code architecture.
        </p>

        <p>Technologies used:</p>

        <ul className="list-disc ml-4">
          <li>Vue JS</li>
          <li>Vuex</li>
          <li>SCSS</li>
          <li>Laravel</li>
          <li>Websockets</li>
        </ul>
      </Project>

      <Project
        projectName="BrandStencil"
        projectDate="October 2020 - June 2023"
        projectUrl="https://brandstencil.com/"
        intro="An online platform to help charities manage their brand assets."
        imageName="brandstencil_dt"
        imageAltText="BrandStencil screenshot"
      >
        <p>BrandStencil is an established web app built using Laravel.</p>

        <p>
          I worked on a number of features in the application, as well as being
          responsible for overhauling the front-end architecture. My
          achievements included:
        </p>

        <ul className="list-disc ml-4">
          <li>Created a component library to improve consistency of styling</li>
          <li>
            Reduced legacy JavaScript and introduced Vue JS components for
            complex UI elements
          </li>
          <li>Replaced legacy CSS with Tailwind CSS</li>
          <li>Used CSS variables to make client theming faster and easier</li>
          <li>Implemented AA accessibility standards across the app</li>
        </ul>

        <p className="mt-4">Technologies used:</p>

        <ul className="list-disc ml-4">
          <li>Vue JS</li>
          <li>Vuex</li>
          <li>Tailwind CSS</li>
          <li>Laravel</li>
        </ul>
      </Project>

      <Project
        projectName="Army Cadet Force"
        projectDate="Jan - June 2021"
        projectUrl="https://armycadets.com/"
        intro="Craft CMS website for the Army Cadet Force (ACF)."
        imageName="acf_dt"
        imageAltText="Army Cadets website screenshot"
      >
        <p>
          The site features a complex Vue app for managing applications to join
          the cadets, which interacts with a headless Laravel API.
        </p>

        <p>
          The Craft CMS setup was also challenging, as ACF have different users
          for each county, and it's important that each county user only has
          permission to edit their own content.
        </p>

        <p>Technologies used:</p>

        <ul className="list-disc ml-4">
          <li>Craft CMS</li>
          <li>Twig templating engine</li>
          <li>SCSS</li>
          <li>Vue JS</li>
          <li>AWS for image and file hosting</li>
        </ul>
      </Project>

      <Project
        projectName="Dark Horses"
        projectDate="Jan - March 2023"
        projectUrl="https://www.darkhorsesmusic.com"
        intro="Website for the psych-rock band Dark Horses."
        imageName="dh_website_dt"
        imageAltText="Dark Horses website screenshot"
      >
        <p>
          The band wanted a fast-loading, simple site to act primarily as a hub
          for links to their content on other platforms.
        </p>

        <p>
          With that in mind, I used the static site generator 11ty to build the
          HTML from Markdown files on deployment, serving as little JavaScript
          as possible. The resulting pages are lightweight and blazing fast,
          scoring 95+ on Google PageSpeed Insights.
        </p>

        <p>Technologies used:</p>

        <ul className="list-disc ml-4">
          <li>11ty and Markdown to render the HTML</li>
          <li>Tailwind CSS for styling</li>
          <li>A sprinkling of JS for interactivity, using Rollup to compile</li>
          <li>Cloudinary for image hosting</li>
        </ul>
      </Project>
    </div>
  );
};

export default Portfolio;
