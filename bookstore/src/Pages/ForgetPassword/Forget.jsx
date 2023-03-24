import React, { useState } from "react";
import '../ForgetPassword/Forget.css';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ForgetApi } from "../../Services/userservices";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

function ForgetPassword(){
   
  const [enteremail,SetEnterEmail]=useState({
    Email_Id:''
  })
  const [regixforemail,SetRegixForEmail]=useState({
    emailMsg:false,
    emailHelper:"",
  })

  let navigate=useNavigate();
  const resetbtn=()=>{
    console.log(enteremail)
    let emailTest=emailRegex.test(enteremail.Email_Id)
    if(emailTest===false){
      SetRegixForEmail(preState =>({...preState,emailMsg:true,emailHelper:'enter correct email'}))

  }
  else if(emailTest===true){
    SetRegixForEmail(preState =>({...preState,emailMsg:false,emailHelper:''}))
  }

  if(emailTest===true){
    ForgetApi(enteremail.Email_Id)
    .then(response => {
        console.log(response)
        localStorage.setItem('token',response.data.data)
    })
    .catch(error => {
        console.log(error)
    })
    navigate('/resetpassword')
  }
   
  }
  const takeemail=(event)=>{
    console.log(event.target.value)
    SetEnterEmail(prev=>({...prev,Email_Id:event.target.value}))
  }
  const navtoCreate=()=>{
    navigate('/')
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
          <div className="forgettitle">Forgot Your Password?</div>
          <div className="cont2">
            <div className="textforget">
            Enter your email address and we'll send you <br></br> a link to reset your password.
            </div>
            <div className="textfeild">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '12px' }}>Email Id</div>
            <TextField 
            onChange={takeemail}
            error={regixforemail.emailMsg}
            helperText={regixforemail.emailHelper}
            id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px',borderRadius:'2px'
            ,border:'1px solid #E2E2E2'}} size='small'/>
            </div>
            <div className="buttonforgrt">
                <Button 
                onClick={resetbtn}
                className="LoginFormButton" size="small" variant="contained" style={{width:'20vw',fontSize: '2px', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px',marginTop: '20px'  }}>
                    Reset Password
                </Button>
                </div>
                <div className="createa">
                  <Button 
                  onClick={navtoCreate}
                  sx={{color:'#0A0102',fontWeight:'bold'}}>CREATE ACCOUNT</Button>
                </div>
          </div>
        </div>
    )
}
export default ForgetPassword;