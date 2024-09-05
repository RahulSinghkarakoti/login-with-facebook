 import React from 'react'
 import FacebookLogin from 'react-facebook-login';

 function Login() {
  const responseFacebook=(response)=>{
    console.log(response);
  }
   return (
     <div>
       LOGIN
       <FacebookLogin
      appId='1033069635484800' // Replace with your actual App ID
      fields="name,email,picture"
      callback={responseFacebook}
    />
     </div>
   )
 }
 
 export default Login
 
 