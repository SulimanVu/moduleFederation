import Root from "./Root";
import { createBrowserRouter } from "react-router-dom";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MainPageAsync />,
      },
      {
        path: "/about",
        element: <AboutPageAsync />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

export default routes;
