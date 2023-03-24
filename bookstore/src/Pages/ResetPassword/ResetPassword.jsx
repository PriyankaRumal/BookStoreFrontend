import React, { useState } from "react";
import '../ResetPassword/ResetPassword.css';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { ResetApi } from "../../Services/userservices";

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function ResetPassword(){
  const [enterDetails,SetEnterDetails]=useState({
    newpassword:'',
    confirmpass:''
  })
  const takePass=(event)=>{
    SetEnterDetails(prev=>({...prev,newpassword:event.target.value}))
  }
  const takeConfirmPass=(event)=>{
    SetEnterDetails(prev=>({...prev,confirmpass:event.target.value}))
  }
  const [userRegix,SetUserRegix]=useState({
    pass:false,
    passHelper:"",
    confirmpass:false,
    confirmpassHelper:""
  })

  const Resetbtn=()=>{
    console.log(enterDetails)
    let passTest=passwordRegex.test(enterDetails.newpassword)
    let confirmpassTest=passwordRegex.test(enterDetails.confirmpass)
    console.log(passTest)
    console.log(confirmpassTest)
    if(passwordRegex.test(enterDetails.newpassword)===false){
      SetUserRegix(preState =>({...preState,pass:true,passHelper:'enter a correct password'}))
  }
  else if(passwordRegex.test(enterDetails.newpassword)===true){
    SetUserRegix(preState =>({...preState,pass:false,passHelper:''}))
  }
  if(passwordRegex.test(enterDetails.confirmpass)===false){
    SetUserRegix(preState =>({...preState,confirmpass:true,confirmpassHelper:'enter a correct password'}))
  }
  else if(passwordRegex.test(enterDetails.confirmpass)===true){
    SetUserRegix(preState =>({...preState,confirmpass:false,confirmpassHelper:''}))
  }

  if(passTest===true & confirmpassTest===true)
  {
    if(enterDetails.newpassword===enterDetails.confirmpass){
      console.log("calling api")
      ResetApi(enterDetails)
                .then((response) => {
                    console.log(response)
                   // localStorage.setItem("token", response.data.data)
                })
                .catch((error) => { console.log(error) })
            console.log("Reset Password successful")
    }
  }
  }

    return(
        <div className="mainForget">
          <div className="header1">
            <div className="imgpart">
              <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A34a6421f-a569-47b8-bc37-078211517464&params=version%3A0&token=1679631500_da39a3ee_2ca87d0cfde17a3530245803c57c8795619a6bc7&api_key=CometServer1" alt="" />
            </div>
            <div className="Bookstore">
              BookStore
            </div>
          </div>
          <div className="forgettitle">Reset Your Password?</div>
          <div className="contain">
            <div className="textfeild1">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '12px' }}>Password</div>
            <TextField 
            onChange={takePass}
            error={userRegix.pass}
            helperText={userRegix.passHelper}
            id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px',borderRadius:'2px'
            ,border:'1px solid #E2E2E2'}} size='small'/>
            </div>
            <div className="textfeild2">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '12px' }}>Confirm Password</div>
            <TextField 
            onChange={takeConfirmPass}
            error={userRegix.confirmpass}
            helperText={userRegix.confirmpassHelper}
            id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px',borderRadius:'2px'
            ,border:'1px solid #E2E2E2'}} size='small'/>
            </div>
            <div className="buttonforgrt">
                <Button 
                onClick={Resetbtn}
                className="LoginFormButton" size="small" variant="contained" style={{width:'20vw',fontSize: '2px', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px',marginTop: '20px'  }}>
                    Reset Password
                </Button>
                </div>
          </div>
        </div>
    )
}
export default ResetPassword;