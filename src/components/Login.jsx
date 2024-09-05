import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

function Login() {
  return (
    <div>
      login 
      <LoginSocialFacebook
        isOnlyGetToken
        appId={process.env.FACEBOOK_APP_ID || ""}
        onLoginStart={onLoginStart}
        onResolve={({ provider, data }) => {
          console.log(provider);
          console.log(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
}

export default Login;
