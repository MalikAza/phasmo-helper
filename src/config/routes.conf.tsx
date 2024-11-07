import ExamplePage from "@app/routes/example.page";
import { RouteProps } from "react-router-dom";

const routes: RouteProps[] = [
  {
    path: '/',
    element: <ExamplePage />
  }
]

export default routes