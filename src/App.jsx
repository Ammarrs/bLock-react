import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";
import Qr from "./pages/Qr";
import Calculator from "./pages/Calculator";
import Pomodoro from "./pages/Pomodoro";
import MoreTools from "./pages/MoreTools";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "*", element: <NotFound /> },
        { index: true, element: <Home /> },
        { path: "weather", element: <Weather /> },
        { path: "pomodoro", element: <Pomodoro /> },
        { path: "calculator", element: <Calculator /> },
        { path: "qr", element: <Qr /> },
        { path: "more", element: <MoreTools /> },
      ],
    },
  ]);

  return (
    <div className="text-(--text-secondary) bg-(--bg-primary) h-screen">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
