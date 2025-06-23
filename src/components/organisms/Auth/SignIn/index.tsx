import React, { useState } from "react";
import SignUp from "../SignUp";
// import { submitQuery } from "../../services/query";
// import toast from "react-hot-toast";

const SignIn = ({ isClose }: any) => {
  const [isSignupOpen, setIsSignUpOpen] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeHandle = (e: any) => {
    if (e.target.id === "closeWrapper") {
      isClose(false);
    }
  };

  const submitHandler = async (e: any) => {};
  return (
    <div className=" absolute z-[100] top-0 left-0  ">
      <div
        onClick={(e) => closeHandle(e)}
        id="closeWrapper"
        className="w-full  md:p-6 bg-transparent bg-black   fixed inset-0 z-[100] flex justify-center items-center "
      >
        {
          <div className="flex flex-col justify-center items-center mx-8 md:mx-0 rounded-2xl shadow-lg transform  translate-x-3 py-5 md:py-8  bg-[#F1F1F3] w-[30%]">
            <span
              id="closeWrapper"
              onClick={(e) => closeHandle(e)}
              className="z-10 absolute top-2 right-4 cursor-pointer"
            >
              X
            </span>
            <h2 className="md:text-2xl text-xl font-bold">Sign In</h2>
            <p className=" w-[75%] text-center text-[13px] text-gray-700 pt-2">
              Login with Details and chexk your orders!
            </p>
            <form
              action=""
              onSubmit={submitHandler}
              className="w-full grid grid-cols-1 gap-6 px-10 py-6"
            >
              <input
                type="email"
                onChange={changeHandler}
                // value={data?.name}
                name="name"
                required
                placeholder="Your Email"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="password"
                required
                onChange={changeHandler}
                // value={data?.email}
                name="password"
                placeholder="Your Password"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />

              <button
                type="submit"
                className="py-2 rounded-[5px] bg-customBlue text-white w-full bg-red"
              >
                Sign In
              </button>
            </form>
            <span>
              Don't have an account?{" "}
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="hpover:border-b-[1px] cursor-pointer text-blue text-sm"
              >
                SignUp
              </button>
            </span>
          </div>
        }
      </div>
      {isSignupOpen && <SignUp isClose={setIsSignUpOpen} />}
    </div>
  );
};
export default SignIn;
