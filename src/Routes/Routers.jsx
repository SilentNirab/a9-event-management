import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivetRoute from "../Provider/PrivateRoute";
import ContactUs from "../ContactUs/ContactUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('/event.json')
        },
        {
            path: "/event/:id",
            element: <PrivetRoute><EventDetails></EventDetails></PrivetRoute>,
            loader: ()=>fetch('/event.json')
        },
        {
          path: "/contactus",
          element: <ContactUs></ContactUs>
        },
        {
            path: "/about",
            element: <PrivetRoute><About></About></PrivetRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;