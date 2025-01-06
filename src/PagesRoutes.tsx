import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
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
  SocialWelfare,
} from "./pages";

import SignUp from "./pages/SignUp";
import Root from "./layouts/Root";
import {
  AdminHome,
  AdminNews,
  CouncilService,
  Policies,
  Project,
  ReportFinance,
  Testimonial,
} from "./pages/Admin";
import DashboardRoot from "./layouts/DashboardRoot";
import AboutUs from "./pages/Admin/AboutUs";

// Loaders
import { loader as HomeLoader } from "./pages/Admin/AdminHome";
import { loader as ProjectsLoader } from "./pages/Admin/Project";
import { loader as NewsLoader } from "./pages/Admin/News";
import { loader as TestimonialLoader } from "./pages/Admin/Testimonial";
import { loader as AboutUsLoader } from "./pages/Admin/AboutUs";
import { useAuth } from "./hooks/useAuth";

const PrivateRoute = ({ children }: any) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function PagesRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route index element={<LandingPage />} />
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

          <Route
            path="council-services/social-welfare"
            element={<SocialWelfare />}
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
        {/* Admin Dashboard */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardRoot />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminHome />} loader={HomeLoader} />
          <Route path="home" element={<AdminHome />} loader={HomeLoader} />
          <Route path="project" element={<Project />} loader={ProjectsLoader} />
          <Route path="news" element={<AdminNews />} loader={NewsLoader} />
          <Route
            path="testimonial"
            element={<Testimonial />}
            loader={TestimonialLoader}
          />
          <Route path="about-us" element={<AboutUs />} loader={AboutUsLoader} />
          <Route path="council-services" element={<CouncilService />} />
          <Route path="report" element={<ReportFinance />} />
          <Route path="policies" element={<Policies />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    ),
    // { basename: "/kono-web/" }
  );

  return <RouterProvider router={router} />;
}

export default PagesRoutes;
