import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp />
    </div>
  );
};

export default page;
