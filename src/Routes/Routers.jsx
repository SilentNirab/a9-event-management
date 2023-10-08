import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('/event.json')
        },
        {
            path: "/event/:id",
            element: <EventDetails></EventDetails>,
            loader: ()=>fetch('/event.json')
        },
        {
            path: "/about",
            element: <About></About>
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