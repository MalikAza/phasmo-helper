import HomePage from "@app/routes/home.page";
import { RouteProps } from "react-router-dom";

const routes: RouteProps[] = [
  {
    path: '/',
    element: <HomePage />
  }
]

export default routes