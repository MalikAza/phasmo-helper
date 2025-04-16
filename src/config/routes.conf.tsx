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
        element: <p className="text-black p-10 font-lazydog h-full w-full flex justify-center items-center">
          <span>Clic droit ou pression longue sur le nom du fantôme pour avoir plus d'informations.</span>
        </p>
      },
      {
        path: '/:ghostId',
        element: <GhostsRouter />
      }
    ]
  }
]

export default routes