import ErrorPage from "@/app/routes/error.page";
import GhostsRouter from "@/components/ghosts/router.ghosts";
import HomePage from "@app/routes/home.page";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <></>
      },
      {
        path: '/:ghostId',
        element: <GhostsRouter />
      }
    ]
  }
]

export default routes