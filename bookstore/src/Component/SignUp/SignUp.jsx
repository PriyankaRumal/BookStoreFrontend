import React, { useState } from "react";
import '../SignUp/SignUp.css';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { SignUpApi } from "../../Services/userservices";

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^([0-9]*).{10}$/;
function SignUp(props){
    const[enterDetail,setEnterDetail] =useState({
        fullName:'',
        email_Id:'',
        password:'',
        mobile_Number:''
    })
    const takeFname=(event)=>{
        setEnterDetail(prev=>({...prev,fullName:event.target.value}))
    }
    const takeEmail=(event)=>{
        setEnterDetail(prev=>({...prev,email_Id:event.target.value}))
    }
    const takePassword=(event)=>{
        setEnterDetail(prev=>({...prev,password:event.target.value}))
    }
    const takeMobileNo=(event)=>{
        setEnterDetail(prev=>({...prev,mobile_Number:event.target.value}))
    }

    const [userRegix,setUserRegix]=useState({
        fnamerror:false,
        fnamehelper:'',

        emailerror:false,
        emailhelper:'',

        passworderror:false,
        passwordhelper:'',

        mobileerror:false,
        mobilehelper:''
    })
    const signupbtn=()=>{
        console.log(enterDetail)
        if(nameRegex.test(enterDetail.fullName)===false){
            setUserRegix(preState =>({...preState,fnamerror:true,fnamehelper:'enter a correct name'}))
        }
        else if(nameRegex.test(enterDetail.fullName)===true){
            setUserRegix(preState =>({...preState,fnamerror:false,fnamehelper:''}))
        }
        if(emailRegex.test(enterDetail.email_Id)===false){
            setUserRegix(preState =>({...preState,emailerror:true,emailhelper:'enter a correct email'}))
        }
        else if(emailRegex.test(enterDetail.email_Id)===true){
            setUserRegix(preState =>({...preState,emailerror:false,emailhelper:''}))
        }
        if(passwordRegex.test(enterDetail.password)===false){
            setUserRegix(preState =>({...preState,passworderror:true,passwordhelper:'enter a correct password'}))
        }
        else if(passwordRegex.test(enterDetail.password)===true){
            setUserRegix(preState =>({...preState,passworderror:false,passwordhelper:''}))
        }
        if(mobileRegex.test(enterDetail.mobile_Number)===false){
            setUserRegix(preState =>({...preState,mobileerror:true,mobilehelper:'enter a correct password'}))
        }
        else if(mobileRegex.test(enterDetail.mobile_Number)===true){
            setUserRegix(preState =>({...preState,mobileerror:false,mobilehelper:''}))
        }

        if(userRegix.fnamerror === false && userRegix.emailerror === false && userRegix.passworderror === false && userRegix.mobileerror === false){
            SignUpApi(enterDetail)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
     

    return(
        <div className="SignUpmain ">
            <div className="firstname">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>FirstName</div>
            <TextField 
            onChange={takeFname}
            error={userRegix.fnamerror}
            helperText={userRegix.fnamehelper}
            id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px'}} size='small'/>
            </div>
            <div className="emailSingUp">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
            <TextField 
            onChange={takeEmail}
            error={userRegix.emailerror}
            helperText={userRegix.emailhelper}
            id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px'}} size='small'/>
            </div>
            <div className="passSingUp">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
            <TextField 
            onChange={takePassword}
            error={userRegix.passworderror}
            helperText={userRegix.passwordhelper}
            id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px'}} size='small'/>
            </div>
            <div className="mobileNo">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Mobile Number</div>
            <TextField 
            onChange={takeMobileNo}
            error={userRegix.mobileerror}
            helperText={userRegix.mobilehelper}
            id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px'}} size='small'/>
            </div>
            <div className="buttonsignup">
                <Button 
                onClick={signupbtn}
                className="LoginFormButton" size="small" variant="contained" style={{width:'20vw',fontSize: '9px', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px',marginTop: '15px'  }}>
                    SignUp
                </Button>
                </div>
        </div>
    )
}
export default SignUp;