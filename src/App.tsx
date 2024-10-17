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
  AboutUs,
  CouncilServices,
  DevelopmentProject,
  Report,
  GovernancePolicies,
  Contact,
} from "./pages";

import SignUp from "./pages/SignUp";
import Root from "./layouts/Root";
import {
  Agriculture,
  AnnualBudget,
  ByLaws,
  CompletdProject,
  CouncilPolicies,
  CouncilStructure,
  Education,
  EnvironmentalServices,
  HealthCare,
  History,
  Home,
  Infrastructure,
  Officials,
  OngoingProject,
  ProjectFunding,
  ProjectReport,
  PublicExpenditure,
  UpcomingProject,
  Vision,
} from "./components";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route element={<Root />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutus">
            <Route index element={<History />} />
            <Route path="history" element={<History />} />
            <Route path="council-structure" element={<CouncilStructure />} />
            <Route path="vision&mission" element={<Vision />} />
            <Route path="officials" element={<Officials />} />
          </Route>
          <Route path="council-services" element={<CouncilServices />} />

          <Route path="council-services">
            <Route index element={<HealthCare />} />
            <Route path="healthcare" element={<HealthCare />} />
            <Route path="education" element={<Education />} />
            <Route path="agriculture-livelihood" element={<Agriculture />} />
            <Route path="infrastructure" element={<Infrastructure />} />
            <Route
              path="environmental-services"
              element={<EnvironmentalServices />}
            />
          </Route>
          <Route path="development-projects">
            <Route index element={<OngoingProject />} />
            <Route path="ongoing-project" element={<OngoingProject />} />
            <Route path="completed-project" element={<CompletdProject />} />
            <Route path="upcoming-project" element={<UpcomingProject />} />
          </Route>
          <Route path="reports-financials">
            <Route index element={<AnnualBudget />} />
            <Route path="annual-budget" element={<AnnualBudget />} />
            <Route path="projects-report" element={<ProjectReport />} />
            <Route path="project-funding" element={<ProjectFunding />} />
            <Route path="public-expenditure" element={<PublicExpenditure />} />
          </Route>
          <Route path="governance-policies">
            <Route index element={<CouncilPolicies />} />
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
