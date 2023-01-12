import {
  createBrowserRouter,
} from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Repos } from "./pages/Repos";

export const routesApp = createBrowserRouter([
  {
    path: "/",
    element: <Blog />
  },
  {
    path: "/repositorio/:login/:repo",
    element: <Repos />
  }
])