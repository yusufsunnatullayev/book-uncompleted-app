import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_PASSWORD, ADMIN_USERNAME } from "../constants";
import { useUsersQuery } from "../services/usersApi";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../features/admin/adminToken";
import { setUserToken } from "../features/users/userToken";
import Button from "../components/ui/Button";

const Login = () => {
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState(true);
  const { data, error, isLoading } = useUsersQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.error("Error fetching users:", error);
    }
  }, [error]);

  const loginHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { username, password } = Object.fromEntries(form.entries());
    if (isUser) {
      if (data) {
        let currentUser = data.find(
          (user) => user.username === username && user.password === password
        );
        if (currentUser) {
          dispatch(setUserToken(true));
          navigate("/");
          return;
        }
      }
      alert("Username or Password wrong!");
      return;
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      dispatch(setAdminToken(true));
      navigate("/admin");
      return;
    }
    alert("Username or Password wrong!");
    e.target.reset();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center py-28 gap-10 ">
      <div className="flex items-center justify-center gap-5 p-5 bg-white rounded-md  shadow w-1/4">
        <h1 className="text-xl font-semibold">Log in as a</h1>
        <Button
          handleClick={() => setIsUser(true)}
          buttonStyles={` border  ${
            isUser ? "bg-blue-600 text-white" : "border-blue-600"
          }`}
        >
          User
        </Button>
        <span className="text-sm font-semibold">or</span>
        <Button
          handleClick={() => setIsUser(false)}
          buttonStyles={`border   ${
            isUser ? "border-blue-600" : "bg-blue-600 text-white"
          }`}
        >
          Admin
        </Button>
      </div>
      <form
        onSubmit={loginHandler}
        className="flex flex-col gap-5 p-10 rounded-md bg-white items-start w-1/4 shadow"
      >
        <h1 className="text-3xl mb-5 font-semibold self-center">Log in</h1>
        <input
          required
          name="username"
          className="w-full border py-1 px-3 rounded-md bg-transparent outline-none text-base font-medium"
          type="text"
          placeholder="username"
        />
        <input
          required
          name="password"
          className="w-full border  py-1 px-3 rounded-md bg-transparent outline-none text-base font-medium"
          type="password"
          placeholder="password"
        />
        <Button buttonStyles={"w-full mt-5 bg-blue-600 text-white"}>
          Log in
        </Button>
        {isUser ? (
          <span className="self-center text-sm font-semibold">
            create a new{" "}
            <Link className=" underline" to={"/register"}>
              account
            </Link>
          </span>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Login;
