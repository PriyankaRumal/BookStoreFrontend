import React, { useState } from "react";
import '../SignIN/SignIn.css';
import Button from '@mui/material/Button';
import Login from "../../Component/Login/Login";

import SignUp from "../../Component/SignUp/SignUp";

function SignIn(){

    const [toggle,SetToggle]=useState(true)

    const openSignUp=()=>{
        SetToggle(false)
    }
    const openLogin=()=>{
        SetToggle(true)
    }
    return(
        <div className="mainClass">
            <div className="ImagePart">
              <img className="img1" src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A85534115-ba16-412e-b646-6dd43d839dd8&params=version%3A0&token=1679631500_da39a3ee_2ca87d0cfde17a3530245803c57c8795619a6bc7&api_key=CometServer1' />
                <div className="Headimg">ONLINE BOOK SHOPPING</div>
            </div>
            <div className="secmain">
                <div className="loginButton">
               {/* <Button className="login" size="large" color="secondary" variant="text">Login</Button> */}
                {/* <Button size="large" color="secondary" variant="text">SignIn</Button> */}
                <div className="login hoverforlogin" onClick={openLogin}>LOGIN</div>
                <div className="login hoverforlogin" onClick={openSignUp} >SIGNUP</div>
                </div>
                <div className="loginpage">
                    {/* <Login/> */}
                    {/* <SignUp/> */}
                  {
                    toggle ? <Login/> :<SignUp />
                  }
                </div>
            </div>
        </div>
    )
}
export default SignIn;