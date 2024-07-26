import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/error";
import Signup from "./pages/signup";
import Home from "./pages/home";
import CreateRecipe from "./pages/post";
import Profile from "./pages/profile";
import Myrecipes from "./pages/myrecipes";
import ProtectedRoutes from "./components/ui/protectedRoutes";

export const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
          },
          {
            path: "/post",
            element: <CreateRecipe />,
            errorElement: <Error />,
          },
          {
            path: "/profile",
            element: <Profile />,
            errorElement: <Error />,
          },
          {
            path: "/myrecipes",
            element: <Myrecipes />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      },
    ]);
    
    export default router;