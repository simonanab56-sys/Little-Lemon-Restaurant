import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";
export const router = createBrowserRouter([{
  path: "/",
  Component: Root,
  children: [{
    index: true,
    Component: Home
  }, {
    path: "menu",
    Component: Menu
  }, {
    path: "reservation",
    Component: Reservation
  }, {
    path: "*",
    Component: NotFound
  }]
}]);