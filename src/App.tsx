import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "coin/:id",
        element: <CoinPage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
