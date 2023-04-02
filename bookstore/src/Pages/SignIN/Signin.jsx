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
              <img className="img1" src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A634ba680-536e-4b6f-b4a3-41986b9b22f5&params=version%3A0&token=1680232944_da39a3ee_ed973141813b2dd15d76bdb5d528dc88c5418e4a&api_key=CometServer1' />
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