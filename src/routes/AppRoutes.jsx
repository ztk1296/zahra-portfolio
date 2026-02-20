import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "contact-me",
        element: <ContactMe />,
      },
    ],
  },
],
  {
    basename: "/zahra-portfolio",
  }
);
