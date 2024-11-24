import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../services/usersApi";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../features/users/userToken";
import Button from "../../components/ui/Button";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();
  const registerHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());
    const userObj = { ...user, id: nanoid() };
    addUser(userObj);
    dispatch(setUserToken(true));
    navigate("/");
    e.target.reset();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center py-28 gap-10 ">
      <form
        onSubmit={registerHandler}
        className="flex flex-col gap-5 p-10 rounded-md bg-white shadow items-start w-[450px]"
      >
        <h1 className="text-3xl mb-5 font-semibold self-center">Register</h1>
        <input
          required
          name="username"
          className="w-full border  py-1 px-3 rounded-md bg-transparent outline-none text-base font-medium"
          type="text"
          placeholder="username"
        />
        <input
          required
          name="email"
          className="w-full border  py-1 px-3 rounded-md bg-transparent outline-none text-base font-medium"
          type="email"
          placeholder="email"
        />
        <input
          required
          name="phone"
          className="w-full border py-1 px-3 rounded-md bg-transparent outline-none text-base font-medium"
          type="tel"
          placeholder="phone number"
        />
        <input
          required
          name="password"
          className="w-full border  py-1 px-3 rounded-md bg-transparent outline-none text-base font-medium"
          type="password"
          placeholder="password"
        />
        <Button buttonStyles={"w-full mt-5 bg-blue-600 text-white"}>
          Register
        </Button>
        <span className="self-center text-sm  font-semibold">
          If you have{" "}
          <Link className=" underline" to={"/login"}>
            account
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
