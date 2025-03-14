import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (
    !isAuthenticated &&
    (location.pathname.includes("/admin") ||
      location.pathname.includes("/doctor"))
  ) {
    return <Navigate to="/auth/login" />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    // Redirect authenticated users away from login/register pages to their respective dashboards
    if (user && user.role === "admin") {
      return <Navigate to="/admin/admindashboard" />;
    } else if (user && user.role === "doctor") {
      return <Navigate to="/doctor/doctordashboard" />;
    } else {
      return <Navigate to="/" />;
    }
  }




  // Prevent users from accessing routes meant for other roles
  if (isAuthenticated && user) {
    if (user.role === "admin" && !location.pathname.includes("/admin")) {
      return <Navigate to="/admin/admindashboard" />;
    } else if (
      user.role === "doctor" &&
      !location.pathname.includes("/doctor")
    ) {
      return <Navigate to="/doctor/doctordashboard" />;
    } else if (
      user.role === "user" &&
      (location.pathname.includes("/admin") ||
        location.pathname.includes("/doctor"))
    ) {
      return <Navigate to="/unauth-page" />;
    }
  }

  // Allow access to the requested route if all checks pass
  return <div>{children}</div>;
}

export default CheckAuth;
