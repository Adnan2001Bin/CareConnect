import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/Config";
import { loginUser } from "@/store/Auth-Slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"; // Updated import to react-router-dom
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  // Toast messages
  const handleSuccessToast = () => {
    toast.success("Login Account successful!...", {
      position: "top-center",
    });
  };

  const handleErrorToast = (message) => {
    toast.error(message || "Something went wrong. Please try again.", {
      position: "top-center",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formData))
      .then((data) => {
        if (data?.payload?.success) {
          handleSuccessToast();
        } else {
          handleErrorToast(data?.payload || "Unexpected error");
        }
      })
      .catch((error) => handleErrorToast("Login failed. Please try again."));
  };

  return (
    <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
      <h1 className="text-3xl font-semibold text-white text-center mb-3">
        Login
      </h1>
      <p className="text-center text-sm mb-5">Login to your account</p>
      <div>
        <CommonForm
          formControls={loginFormControls}
          buttonText={"Login"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          formClassName="space-y-4" // Custom form class
          inputClassName="bg-[#333A5C] text-white" // Custom input class
          buttonClassName="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium mt-5 
            transition duration-300 ease-in-out transform hover:scale-100 hover:from-indigo-400 hover:to-indigo-800 
            will-change-transform" // Custom button class
          labelClassName="text-white" // Custom label class
        />

        {/* Forgot Password Link */}
        <p className="text-gray-400 text-center text-xs mt-4">
          <Link
            to="/auth/forgot-password"
            className="text-blue-400 cursor-pointer underline hover:text-blue-300 transition-colors duration-200"
          >
            Forgot Password?
          </Link>
        </p>

        {/* Sign Up Link */}
        <p className="text-gray-400 text-center text-xs mt-2">
          Don't have an account?{" "}
          <span className="text-blue-400 cursor-pointer underline">
            <Link to="/auth/register">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;