import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layouts/Main";
import AddToys from "../pages/AddToys/AddToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addToys",
        element: <AddToys />,
      },
    ],
  },
]);

export default router;
