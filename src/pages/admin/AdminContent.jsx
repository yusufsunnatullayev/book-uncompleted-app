import React from "react";
import { Route, Routes } from "react-router-dom";
import { protectedRoutes } from "../../routes/routes";

const AdminContent = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white w-full min-h-screen bg-gray-100 p-5">
      <Routes>
        {protectedRoutes.map((route) =>
          route.subRoutes.map((subRoute) => (
            <Route
              key={subRoute.id}
              path={subRoute.path}
              element={<subRoute.subRoute />}
            />
          ))
        )}
      </Routes>
    </div>
  );
};

export default AdminContent;
