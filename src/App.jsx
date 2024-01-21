import Homepage from "./components/Home/Homepage";
import Signin from "./components/Home/Signin";
import Signup from "./components/Home/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Stat from "./components/Stat/Stat";
import Setting from "./components/Setting/Setting";
import Profile from "./components/Profile/Profile";
import ResetPassword from "./components/Home/ResetPassword";
import Account from "./components/Setting/Account";
import ActivityDetail from "./components/Dashboard/ActivityDetail";
import HelpSupport from "./components/Setting/HelpSupport";
import TermsConditions from "./components/Setting/TermsConditions";
import Feedback from "./components/Setting/Feedback";
import AboutUs from "./components/Setting/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "home",
    element: <Dashboard />,
  },
  {
    path: "activity-details",
    element: <ActivityDetail />,
  },
  {
    path: "stat",
    element: <Stat />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "support",
    element: <HelpSupport />,
  },
  {
    path: "terms",
    element: <TermsConditions />,
  },
  {
    path: "feedback",
    element: <Feedback />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
