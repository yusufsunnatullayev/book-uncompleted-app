import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { protectedRoutes, userProtectedRoutes } from "./routes/routes";
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/users/Register"));
const ProtectedRoutes = lazy(() => import("./routes/ProtectedRoutes"));
const UserProtectedRoutes = lazy(() => import("./routes/UserProtectedRoutes"));

const App = () => {
  const adminToken = useSelector((state) => state.adminToken.adminToken);
  const userToken = useSelector((state) => state.userToken.userToken);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    localStorage.setItem("adminToken", JSON.stringify(adminToken));
  }, [adminToken]);

  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(userToken));
  }, [userToken]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          {protectedRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={<route.route />} />
          ))}
        </Route>

        <Route element={<UserProtectedRoutes />}>
          {userProtectedRoutes.map((userProtectedRoute) => (
            <Route
              key={userProtectedRoute.id}
              path={userProtectedRoute.path}
              element={<userProtectedRoute.route />}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
