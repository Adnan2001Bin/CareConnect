import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // 1: Enter email, 2: Enter OTP and new password
  const navigate = useNavigate();

  // Handle sending OTP
  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/send-reset-otp`,
        { email }
      );

      if (response.data.success) {
        toast.success("OTP sent to your email.");
        setStep(2); // Move to the next step
      } else {
        toast.error(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(error.response?.data?.message || "Failed to send OTP.");
    }
  };

  // Handle resetting password
  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/reset-password`,
        { email, otp, newPassword }
      );

      if (response.data.success) {
        toast.success("Password reset successfully.");
        navigate("/auth/login"); // Redirect to login page
      } else {
        toast.error(response.data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error(error.response?.data?.message || "Failed to reset password.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-700 to-gray-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 p-8 rounded-xl shadow-lg w-full max-w-md text-indigo-300 text-sm transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-semibold text-white text-center mb-6 animate-fade-in">
          Forgot Password
        </h1>
        <p className="text-center text-gray-400 mb-6">
          {step === 1
            ? "Enter your email to receive an OTP"
            : "Enter OTP and your new password"}
        </p>

        {step === 1 ? (
          // Step 1: Enter email to receive OTP
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2.5 bg-[#333A5C] text-white border border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:from-indigo-400 hover:to-indigo-800 will-change-transform"
            >
              Send OTP
            </button>
          </div>
        ) : (
          // Step 2: Enter OTP and new password
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="block w-full px-4 py-2.5 bg-[#333A5C] text-white border border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                placeholder="Enter OTP"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block w-full px-4 py-2.5 bg-[#333A5C] text-white border border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                placeholder="Enter new password"
              />
            </div>
            <button
              onClick={handleResetPassword}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:from-indigo-400 hover:to-indigo-800 will-change-transform"
            >
              Reset Password
            </button>
          </div>
        )}

        {/* Back to Login Link */}
        <p className="text-gray-400 text-center text-xs mt-6">
          Remembered your password?{" "}
          <a
            href="/auth/login"
            className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
          >
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

