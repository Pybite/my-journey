import LoginScreen from "./pages/login/login.js";
import SignUp from "./pages/signup/signup.js";
import Dashboard from "./pages/dashboard/dashboard.js";
import Createblog from "./pages/createblog/createblog.js";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element:  <LoginScreen />
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/create-blog",
        element: <Createblog />,
      },
    ],
  },
];

export default routes;
