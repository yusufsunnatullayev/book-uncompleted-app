import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function UserProtectedRoutes() {
  const userToken = useSelector((state) => state.userToken.userToken);
  return userToken ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"login"} />
  );
}

export default UserProtectedRoutes;
