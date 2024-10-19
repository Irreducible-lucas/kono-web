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
  Contact,
  AboutUs,
  Council,
  Vision,
  Home,
  Profiles,
  Officials,
} from "./pages";

import SignUp from "./pages/SignUp";
import Root from "./layouts/Root";
import {
  Agriculture,
  AnnualBudget,
  ByLaws,
  CompletdProjects,
  CouncilPolicies,
  Education,
  EnvironmentalServices,
  HealthCare,
  Infrastructure,
  OngoingProjects,
  ProjectFunding,
  ProjectReport,
  PublicExpenditure,
  UpcomingProjects,
} from "./components";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="aboutus/history" element={<AboutUs />} />
          <Route path="aboutus/council-structure" element={<Council />} />
          <Route path="aboutus/vision&mission" element={<Vision />} />
          <Route path="aboutus/profiles" element={<Profiles />} />
          <Route path="aboutus/officials" element={<Officials />} />

          <Route path="council-services/healthcare" element={<HealthCare />} />
          <Route path="council-services/education" element={<Education />} />
          <Route
            path="council-services/agriculture"
            element={<Agriculture />}
          />
          <Route
            path="council-services/infrastructure"
            element={<Infrastructure />}
          />
          <Route
            path="council-services/environmental"
            element={<EnvironmentalServices />}
          />
          <Route
            path="development-projects/ongoing-project"
            element={<OngoingProjects />}
          />
          <Route
            path="development-projects/completed-project"
            element={<CompletdProjects />}
          />
          <Route
            path="development-projects/upcoming-project"
            element={<UpcomingProjects />}
          />
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
