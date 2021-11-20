import React from 'react'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";

const clientID ="325938476338-1v2al1t06707e5qrv29onokh133boha1.apps.googleusercontent.com";



function LoginButton() {
  const onSuccess = (res) => {
    console.log("[LOGIN SUCCESS] currentuser:", res.profileObj);

    refreshTokenSetup(res);
  }

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login With Google"
        onSucess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single-host-origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true} 
      />
    </div>
  )
}

function LogoutButton() {
  const onSuccess = () => {
      alert("logged out 😅")
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientID}
        buttonText="Log out with google"
        onLogoutSuccess={onSuccess}>
      </GoogleLogout>
    </div>
  )
}

function Signup() {
  return (
    <>
      <div>
        <h1>Sign in with google!</h1>
        <LoginButton />
      </div>
      <div>
        <h2>Sign out with google!</h2>
        <LogoutButton />
      </div>
    </>
  )
}

export default Signup
