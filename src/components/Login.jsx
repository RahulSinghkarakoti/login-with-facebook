import React, { useEffect } from "react";
import FacebookLoginButton from "./FacebookLoginButton";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accesstoken");

    if (accessToken) {
      console.log(accessToken);
      navigate("/home"); // Navigate to the home route if the token exists
    }
  }, [navigate]);

  return (
    <div className="bg-slate-700 h-screen flex flex-col items-center justify-center gap-3">
      <p className="text-4xl font-semibold  text-center text-black">
        LOGIN PAGE
      </p>
      <FacebookLoginButton />
    </div>
  );
}

export default Login;
