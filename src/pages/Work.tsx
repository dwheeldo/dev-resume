import { faHistory } from '@fortawesome/free-solid-svg-icons';
import Title from '../components/Title';
import Panel from '../components/Panel';

const Work = () => {
  return (
    <div className="">
      <Title text="Work history" icon={faHistory} />

      <ul className="-mb-2">
        <Panel>
          <h2 className="text-base leading-none font-semibold mb-1 lg:text-lg">
            Front-end Developer
          </h2>
          <p>
            <a
              href="https://app.lickd.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400"
            >
              Lickd
            </a>{' '}
            | April 2024 - present
          </p>

          <ul className="list-disc ml-4">
            <li className="mb-2">
              Worked on the front-end of Lickd, a server-rendered React
              application used to license music for YouTube and other streaming
              services.
            </li>
            <li className="mb-2">
              Integrated with multiple back-end APIs, using both JSON and
              GraphQL.
            </li>
            <li className="mb-2">
              Implemented and wrote Jira tickets, working closely with the
              company's QA department.
            </li>
            <li>
              Collaborated with the rest of the dev team to streamline
              processes.
            </li>
          </ul>
        </Panel>

        <Panel>
          <h2 className="text-base leading-none font-semibold mb-1 lg:text-lg">
            Web Developer
          </h2>
          <p>
            <a
              href="https://electricputty.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400"
            >
              Electric Putty
            </a>{' '}
            | October 2020 - June 2023
          </p>

          <ul className="list-disc ml-4">
            <li className="mb-2">
              Designed and built the front-end framework for Laravel
              applications, using vanilla JS and Vue.
            </li>
            <li className="mb-2">
              Created and maintained several standalone Vue / React apps, using
              Vuex / Redux for state management.
            </li>
            <li className="mb-2">
              Worked extensively with back-end REST APIs and JSON data.
            </li>
            <li className="mb-2">
              Modernised the front-end architecture of{' '}
              <a
                href="https://brandstencil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400"
              >
                BrandStencil
              </a>
              , creating a reusable component library and implementing AA
              accessibility standards.
            </li>
            <li>Developed and maintained Craft CMS sites.</li>
          </ul>
        </Panel>

        <Panel>
          <h2 className="text-base leading-none font-semibold mb-1 lg:text-lg">
            Front-end Developer
          </h2>
          <p>
            <a
              href="https://www.wilddogdesign.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400"
            >
              Wild Dog Design
            </a>{' '}
            | May 2019 - October 2020
          </p>

          <ul className="list-disc ml-4">
            <li className="mb-2">
              Developed responsive websites from designs using SCSS, JavaScript
              and the Nunjucks templating engine.
            </li>
            <li className="mb-2">
              Contributed to{' '}
              <a
                href="https://wilddogcanvas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400"
              >
                Canvas
              </a>
              , a Vue/Nuxt-powered SaaS platform for customised trip
              itineraries.
            </li>
            <li>
              Helped build a Carbon Emissions Calculator application using React
              and Redux.
            </li>
          </ul>
        </Panel>

        <Panel>
          <h2 className="text-base leading-none font-semibold mb-1 lg:text-lg">
            E-learning Scriptwriter / Developer
          </h2>
          <p>2008 - 2019</p>

          <ul className="list-disc ml-4">
            <li>
              Wrote copy and developed online training for clients including
              PepsiCo, O2 and IBM.
            </li>
          </ul>
        </Panel>
      </ul>
    </div>
  );
};

export default Work;
