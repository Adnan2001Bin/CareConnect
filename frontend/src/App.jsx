import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/user-view/Home";
import Contact from "./pages/user-view/Contact";
import Login from "./pages/auth/Login";
import UserLayout from "./components/user-view/Layout.jsx";
import About from "./pages/user-view/About";
import Doctors from "./pages/user-view/Doctors";
import MyAppoinments from "./pages/user-view/MyAppoinments";
import MyProfile from "./pages/user-view/MyProfile";
import Appoinment from "./pages/user-view/Appoinment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "doctors", 
          element: <Doctors />,
        },
        {
          path: "doctors/:speciality", 
          element: <Doctors />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "my-profile", 
          element: <MyProfile />,
        },
        {
          path: "my-appoinments", 
          element: <MyAppoinments />,
        },
        {
          path: "login", 
          element: <Login />,
        },
        {
          path: "appoinments", 
          element: <Appoinment />,
        },

        {
          path: "appoinments/:docId", 
          element: <Appoinment />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
