import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { loginRedux } from "../Redux/userSlice";

export default function Signup() {
  const [eye, seteye] = useState(false);
  const eyehandle = () => {
    seteye(!eye);
  };

  //=====================================
  //=====================================

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let user = await axios.post("/login", { email, password });
      if (user.data.status === false) {
        toast.error(user.data.message);
        navigate("/signup");
      }
      if (user.data.status === true) {
        //=========================================
        dispatch(loginRedux(user));
        localStorage.setItem("token",user.data.token );
         //=========================================
        toast.success(useData.user.fname + " " + user.data.messege);
        navigate("/home");
      }
      // console.log(useData.user)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full h-[100vh] flex  justify-center pt-[95px] bg-slate-200">
      <div className="bg-white h-[28rem] w-[20rem]  flex flex-col items-center  md:w-[30rem] md:mt-8 rounded-lg ">
        <div className=" flex  text-6xl text-center justify-items-center pt-3 items-center ">
          {" "}
          <FaUserCircle></FaUserCircle>
        </div>
        <h1 className="item-center md:text-3xl text-2xl font-bold">Log in</h1>
        <div className=" w-full left-0 mt-5">
          <form
            onSubmit={handlesubmit}
            className="w-full  flex flex-col gap-2 px-5 "
            action=""
          >
            <label className="text-xl font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className=" mt-2 focus-within:outline-blue-500 border-2 h-8 px-5 bg-gray-200  rounded-xl"
            />
            <div className="relative w-full flex flex-col ">
              <label className="text-xl font-bold" htmlFor="password">
                Password
              </label>
              <input
                type={eye ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className=" mt-2 border-2 h-8 focus-within:outline-blue-500 px-5 bg-gray-200  rounded-xl"
              />
              {eye ? (
                <div className="absolute right-2 bottom-2">
                  <AiFillEye onClick={eyehandle}></AiFillEye>
                </div>
              ) : (
                <div className="absolute right-2 bottom-2">
                  <AiFillEyeInvisible onClick={eyehandle}></AiFillEyeInvisible>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="m-auto px-9 py-3 rounded-full font-bold shadow-md bg-blue-300 "
            >
              Login
            </button>
            <div className="text-l font-bold ">
              Already have Accout ?
              <Link
                className="underline underline-offset-2 text-blue-500   "
                to="/signup"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
