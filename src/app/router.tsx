import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import ErrorPage from "@app/routes/error.page";
import NotFoundPage from "@app/routes/notFound.page";
import { ReactElement } from "react";
import routes from "@config/routes.conf";

function getRoutes(): RouteProps[] {
  return routes.map(route => ({...route, errorElement: route.errorElement || <ErrorPage />}))
}

function getRoutesElements(): ReactElement[] {
  return getRoutes().map((route, index) => <Route key={index} {...route} />)
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {getRoutesElements()}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter