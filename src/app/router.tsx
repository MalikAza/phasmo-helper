import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import NotFoundPage from "@app/routes/notFound.page";
import routes from "@config/routes.conf";

function createAppRouter(routeConfiguration: RouteObject[]) {
  const router = createBrowserRouter([
    ...routeConfiguration,
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return router
}

function AppRouter() {
  const router = createAppRouter(routes)

  return <RouterProvider router={router} />
}

export default AppRouter