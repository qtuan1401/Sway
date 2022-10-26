import * as ROUTES from './paths';

import HomePage from '../components/pages/HomePage';
import ResultsPage from '../components/pages/ResultsPage';
import OurModelPage from '../components/pages/OurModelPage';
import AboutUsPage from '../components/pages/AboutUsPage';
import LinksPage from '../components/pages/LinksPage';

const ROUTES_DETAILS = [
  {
    path: ROUTES.RESULTS_PAGE,
    exact: true,
    element: <ResultsPage />,
  },
  {
    path: ROUTES.ABOUT_US_PAGE,
    exact: true,
    element: <AboutUsPage />
  },
  {
    path: ROUTES.MODEL_PAGE,
    exact: true,
    element: <OurModelPage />
  },
  {
    path: ROUTES.LINKS_PAGE,
    exact: true,
    element: <LinksPage />
  },
  {
    path: ROUTES.HOMEPAGE,
    exact: true,
    element: <HomePage />,
  }
];

export default ROUTES_DETAILS;