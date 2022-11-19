import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AppIndex from "./AppIndex";
import ContactUs from "../Pages/ContactUs/ContactUs"
import About from "../Pages/About/About"
import Services from "../Pages/Services/Services"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"
import RequireAuth from "../Pages/Services/Services"
import Dashboard from "../views/Dashboard"
import Messages from "../views/Messages";
import UserProfileLite from "../views/UserProfileLite";
import MyPatients from "../views/MyPatients"
import Invoice from "../Pages/Invoice/Invoice"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Blog from "../Pages/Blog/Blog"
import Appointment from "../Pages/Softwares/Appointment/Appointment"





function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <Services /> },

        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <ContactUs />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/SignUp",
          element: <SignUp />,
        },
        {
          path: "/Invoice/:id",
          element: <RequireAuth>
            <Invoice />,
          </RequireAuth>
        },
        {
          path: "/dashboard",
          element:
            <RequireAuth>
              <Dashboard />,
            </RequireAuth>
        },
        {
          path: "/messages",
          element: <RequireAuth>
            <Messages />,
          </RequireAuth>
        },
        {
          path: "/appointment",
          element: <RequireAuth>
            <Appointment />,
          </RequireAuth>
        },
        {
          path: "/user-profile",
          element: <RequireAuth>
            <UserProfileLite />,
          </RequireAuth>
        },
        {
          path: "/mypatients",
          element: <RequireAuth>
            <MyPatients />,
          </RequireAuth>
        },

      ],
    },
    {
      path: "/Blog",
      element: <Blog />,
    },
    <ToastContainer />
  ]);
  return element;
}
export default AppNavigation;
