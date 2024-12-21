import { faHistory } from '@fortawesome/free-solid-svg-icons';
import Title from '../components/Title';
import Panel from '../components/Panel';
import { MetaTitle } from '../components/MetaTitle';

const Work = () => {
  return (
    <div className="">
      <MetaTitle title="Work history" />
      <Title text="Work history" icon={faHistory} />

      <div className="-mb-4">
        <Panel>
          <h2 className="text-base leading-none font-semibold mb-1 lg:text-lg">
            Front-end Engineer
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
              Worked on the front-end of Lickd, a React / Express app used to
              license music for YouTube and other streaming services.
            </li>
            <li className="mb-2">
              Led the front-end implementation of several new features,
              including the introduction of a completely new subscription model.
            </li>
            <li className="mb-2">
              Worked closely with the back-end team to ensure stable and
              efficient communication with the front-end via REST and GraphQL
              APIs.
            </li>
            <li className="mb-2">
              Wrote RFCs suggesting future improvements to the platform, along
              with potential implementation solutions.
            </li>
            <li className="mb-2">
              Wrote, prioritised and completed Jira tickets alongside the
              company's QA and product departments.
            </li>
            <li>
              Streamlined front-end development processes and updated the
              environment to enable modern React features.
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
      </div>
    </div>
  );
};

export default Work;
