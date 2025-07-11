import React, { useState } from "react";
// import { submitQuery } from "../../services/query";
// import toast from "react-hot-toast";

const SignUp = ({ isClose }: { isClose: (value: boolean) => void }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "closeWrapper") {
      isClose(false);
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div className=" absolute z-[100] top-0 left-0  ">
      <div
        onClick={(e) => closeHandle(e)}
        id="closeWrapper"
        className="w-full  md:p-6 bg-transparent bg-black bg-opacity-5   fixed inset-0 z-[100] flex justify-center items-center "
      >
        {
          <div className="flex flex-col justify-center items-center mx-8 md:mx-0 rounded-2xl shadow-lg transform  translate-x-3 py-5 md:py-8  bg-[#F1F1F3] w-[40%]">
            <span
              id="closeWrapper"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => closeHandle(e)}
              className="z-10 absolute top-2 right-4 cursor-pointer"
            >
              X
            </span>
            <h2 className="md:text-2xl text-xl font-bold">Sign Up</h2>
            <p className=" w-[75%] text-center text-[13px] text-gray-700 pt-2">
              Create your account!
            </p>
            <form
              action=""
              onSubmit={submitHandler}
              className="w-full grid grid-cols-1 gap-6 px-10 py-6"
            >
              <input
                type="text"
                onChange={changeHandler}
                value={data?.name}
                name="name"
                required
                placeholder="Name"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="email"
                onChange={changeHandler}
                value={data?.name}
                name="name"
                required
                placeholder="Email"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="phone"
                onChange={changeHandler}
                value={data?.name}
                name="name"
                required
                placeholder="Phone"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="password"
                onChange={changeHandler}
                value={data?.name}
                name="name"
                required
                placeholder="Password"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="password"
                required
                onChange={changeHandler}
                value={data?.email}
                name="password"
                placeholder="Confirm Password"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />

              <button
                type="submit"
                className="py-2 rounded-[5px] bg-customBlue text-white w-full bg-red"
              >
                Sign Up
              </button>
            </form>
            <span>
              Have an account?{" "}
              <button
                onClick={() => isClose(false)}
                className="hpover:border-b-[1px] cursor-pointer text-blue text-sm"
              >
                SignIn
              </button>
            </span>
          </div>
        }
      </div>
    </div>
  );
};

export default SignUp;
