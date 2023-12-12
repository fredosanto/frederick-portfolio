import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { ErrorBoundary } from "./routes/Error";
import { About } from "./routes/About";
import { Projects } from "./routes/Projects";
import { Contact } from "./routes/Contact";
import "../src/styles/media.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "projects",
    element: <Projects />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorBoundary />,
  },
]);

// const router = createBrowserRouter(createRoutesFromChildren);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
