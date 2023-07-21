import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Messenger from "./Pages/Messenger";
import Auth from "./Pages/Auth";
import createUser from "./Pages/createUser";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <createUser/>,
    },
    {
      path: "/auth",
      element: <Auth/>,
    },
    {
      path: "/chat",
      element: <Messenger/>,
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
