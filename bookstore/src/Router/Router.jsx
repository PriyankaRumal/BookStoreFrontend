import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignIn from "../Pages/SignIN/Signin";
import ForgetPassword from "../Pages/ForgetPassword/Forget";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
function Router1(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path= '/' element ={<SignIn/>} />
                    <Route path= '/forgetpassword' element ={<ForgetPassword/>} />
                    <Route path= '/resetpassword' element ={<ResetPassword/>} />
                </Routes>
              
            </Router>
            
        </div>
    )
    
}
export default Router1;