import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.tsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.tsx";
import RunewordPage from "./pages/RunewordPage.tsx";
import RunesPage from "./pages/RunesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/runewords",
        element: <RunewordPage />,
      },
      {
        path: "/runes",
        element: <RunesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
