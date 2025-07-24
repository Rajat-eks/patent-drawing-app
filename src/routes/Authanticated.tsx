import Link from "next/link";
import React from "react";
// import { Navigate } from "react-router-dom";

interface AuthanticationProps {
  // define props here
  children?: any;
}

const Authanticated: React.FC<AuthanticationProps> = ({ children }) => {
  const cookies = document.cookie;
  const isLogIn = cookies?.includes("auth");
  return isLogIn ? children : <Link href={"/auth/signIn"} />;
};

export default Authanticated;
