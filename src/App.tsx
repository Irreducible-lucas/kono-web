import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  ErrorPage,
  LandingPage,
  Login,
  CouncilServices,
  Contact,
  Vision,
  Officials,
  HistoryBody,
  HealthCare,
  Education,
  Agriculture,
  Infrastructure,
  EnvironmentalServices,
  OngoingProject,
  CompletdProject,
  UpcomingProject,
  AnnualBudget,
  ProjectReport,
  ProjectFunding,
  PublicExpenditure,
  CouncilPolicies,
  ByLaws,
  Council,
  Profiles,
  Home,
  DevelopmentProject,
  Report,
  GovernancePolicies,
  AboutUsPage,
  History,
} from "./pages";

import SignUp from "./pages/SignUp";
import Root from "./layouts/Root";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="aboutus/history" element={<History />} />
          <Route path="aboutus/council-structure" element={<Council />} />
          <Route path="aboutus/vision&mission" element={<Vision />} />
          <Route path="aboutus/profiles" element={<Profiles />} />
          <Route path="aboutus/officials" element={<Officials />} />

          <Route path="home" element={<LandingPage />} />
          <Route path="aboutus">
            <Route index element={<AboutUsPage />} />
            <Route path="history" element={<HistoryBody />} />
            <Route path="council-structure" element={<Council />} />
            <Route path="vision&mission" element={<Vision />} />
            <Route path="officials" element={<Officials />} />
          </Route>
          <Route
            path="officials/chiefdom/:chiefdomId"
            element={<Officials />}
          />

          <Route path="council-services">
            <Route index element={<CouncilServices />} />
            <Route path="history" element={<HistoryBody />} />
            <Route path="council-structure" element={<Council />} />
            <Route path="vision&mission" element={<Vision />} />
            <Route path="officials" element={<Officials />} />
          </Route>

          <Route path="council-services" element={<CouncilServices />} />
          <Route path="council-services/healthcare" element={<HealthCare />} />
          <Route path="council-services/education" element={<Education />} />
          <Route
            path="council-services/agriculture-livelihood"
            element={<Agriculture />}
          />
          <Route
            path="council-services/infrastructure"
            element={<Infrastructure />}
          />
          <Route
            path="council-services/environmental-services"
            element={<EnvironmentalServices />}
          />
          <Route path="development-projects">
            <Route index element={<DevelopmentProject />} />
            <Route path="ongoing-project" element={<OngoingProject />} />
            <Route path="completed-project" element={<CompletdProject />} />
            <Route path="upcoming-project" element={<UpcomingProject />} />
          </Route>
          <Route path="reports-financials">
            <Route index element={<Report />} />
            <Route path="annual-budget" element={<AnnualBudget />} />
            <Route path="projects-report" element={<ProjectReport />} />
            <Route path="project-funding" element={<ProjectFunding />} />
            <Route path="public-expenditure" element={<PublicExpenditure />} />
          </Route>
          <Route path="governance-policies">
            <Route index element={<GovernancePolicies />} />
            <Route path="council-policies" element={<CouncilPolicies />} />
            <Route path="bylaws-ordiances" element={<ByLaws />} />
          </Route>

          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
