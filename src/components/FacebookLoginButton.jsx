import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slice";

const FacebookLoginButton = () => {
  const navigate = useNavigate();
const dispatch=useDispatch()
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v15.0",
      });

      FB.AppEvents.logPageView();
    };

    // Load the Facebook SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleLogin = () => {
    FB.login(
      (response) => {
        if (response.authResponse) {
          console.log("Logged in", response.authResponse.accessToken); 
          const accessToken = response.authResponse.accessToken;
          dispatch(setUser({ accessToken }));

          navigate("/home");
          // Fetch user info
          FB.api("/me", (userInfo) => {
            if (!userInfo || userInfo.error) {
              console.error("Error fetching user info:", userInfo.error);
            } else {
              console.log("Good to see you, " + userInfo.name + ".");
            }
          });
        } else {
          console.log("User cancelled login or failed.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="text-white bg-blue-400 p-3 text-3xl rounded-xl"
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default FacebookLoginButton;
