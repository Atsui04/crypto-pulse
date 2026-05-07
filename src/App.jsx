import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/coin/:id",
        element: <CoinPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
