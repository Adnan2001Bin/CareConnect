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
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import DoctorList from "./pages/admin-view/DoctorList";
import AddDoctor from "./pages/admin-view/AddDoctor";
import Appointments from "./pages/admin-view/Appointments";
import DoctorLayout from "./components/doctor-view/DoctorLayout";
import DoctorDashboard from "./pages/doctor-view/DoctorDashboard";
import DoctorProfile from "./pages/doctor-view/DoctorProfile";
import DoctorAppointments from "./pages/doctor-view/DoctorAppointments";
import CheckAuth from "./components/common/Check-Auth";
import NotFound from "./Not-Found";
import UnauthPage from "./unauth-page";
import Register from "./pages/auth/Register";
import AuthLayout from "./components/auth/layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/Auth-Slice";
import Loader from "./components/Loader/Loader";
import ForgetPassword from "./pages/auth/Forget-Password";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return <div><Loader /></div>; // Or a 
  }
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-password", element: <ForgetPassword /> },
      ],
    },

    {
      path: "/doctor",
      element: (
        // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <DoctorLayout />
        // </CheckAuth>
      ),
      children: [
        { path: "doctordashboard", element: <DoctorDashboard /> },
        { path: "doctorprofile", element: <DoctorProfile /> },
        { path: "doctorappointments", element: <DoctorAppointments /> },
      ],
    },
    {
      path: "/admin",
      element: (
        // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        /* </CheckAuth> */
      ),
      children: [
        { path: "admindashboard", element: <AdminDashboard /> },
        { path: "doctorList", element: <DoctorList /> },
        { path: "addDoctor", element: <AddDoctor /> },
        { path: "appointments", element: <Appointments /> },
      ],
    },
    {
      path: "/",
      element: (
          <UserLayout />
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "doctorslist", element: <Doctors /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "my-profile", element: <MyProfile /> },
        { path: "my-appoinments", element: <MyAppoinments /> },
        { path: "appoinments/:id", element: <Appoinment /> },
      ],
    },
    { path: "*", element: <NotFound /> },
    { path: "/unauth-page", element: <UnauthPage /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
