import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import OrderOnline from "./components/OrderOnline.jsx";
import Login from "./components/Login.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/menu", element: <Menu /> },
      { path: "/order", element: <OrderOnline /> },
      { path: "/reservation", element: <Form /> },
      { path: "/order", element: <OrderOnline /> },
      { path: "/Login", element: <Login /> },
    ],
    errorElement:<Error/>
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
