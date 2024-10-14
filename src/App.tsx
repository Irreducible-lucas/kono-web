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
import { Home } from "./components";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route element={<Root />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="council-services" element={<CouncilServices />} />
          <Route path="development-projects" element={<DevelopmentProject />} />
          <Route path="reports-financials" element={<Report />} />
          <Route path="governance-policies" element={<GovernancePolicies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
