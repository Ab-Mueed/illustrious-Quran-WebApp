import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home.jsx";
import Quran from "./pages/Quran.jsx";
import Root from "./pages/Root"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

export let themeMode = {};

function App() {
  const [currentState, setCurrentState] = useState(false);

  const onHit = () => {
    setCurrentState(prev => !prev);
  };
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root onHit={onHit}/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Quran",
        element: <Quran />,
      },
    ],
  },
]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
