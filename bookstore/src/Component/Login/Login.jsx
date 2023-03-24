import React, { useState } from "react";
import '../Login/Login.css';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { SignInApi } from "../../Services/userservices";
import { useNavigate } from "react-router-dom";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Login(){

     const[userDetails ,SetuserDetails]=useState({
        email_Id:'',
        password:''
     })

     const takeEmail=(event)=>{
        console.log(event.target.value)
        SetuserDetails(prev=>({...prev,email_Id:event.target.value}))
     }

     const takePass=(event)=>{
        console.log(event.target.value)
        SetuserDetails(prev=>({...prev,password:event.target.value}))
     }

     const [userRegix,setuserRegix]=useState({
        emailMsg:false,
        emailHelper:"",
        passMsg:false,
        passHelper:""
    })
    let navigate = useNavigate();
     const navToForget=()=>{
        navigate('/forgetpassword')
     }

     const loginbtn=()=>{
        console.log(userDetails)
        let emailTest=emailRegex.test(userDetails.email_Id)
        let passTest=passwordRegex.test(userDetails.password)
        console.log(emailTest)
        console.log(passTest)
        if(emailTest===false){
            setuserRegix(preState =>({...preState,emailMsg:true,emailHelper:'enter correct email'}))
        }
        else if(emailTest===true){
            setuserRegix(preState =>({...preState,emailMsg:false,emailHelper:''}))
        }
        if(passTest===false){
            setuserRegix(preState =>({...preState,passMsg:true,passHelper:'enter correct Password'}))
        }
        else if(passTest===true){
            setuserRegix(preState =>({...preState,passMsg:false,passHelper:''}))
        }

        if (emailTest === true && passTest === true) {
            SignInApi(userDetails)
                .then(response => {
                    console.log(response)
                    localStorage.setItem('token',response.data.data)
                     navigate('/dashboard')
                })
                .catch(error => {
                    console.log(error)
                })
        }
     }
     
    return(
        <div>
            <div className="mainlogin">
                <div className="email">
                <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '12px' }}>Email Id</div>
                <TextField
                onChange={takeEmail}
                error={userRegix.emailMsg}
                helperText={userRegix.emailHelper}
                 id="outlined-basic"  variant="outlined" style={{width:'20vw',fontSize:'12px'}} size='small'/>
                </div>
                <div className="password">
                <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '12px' }}>Password</div>
                <TextField
                onChange={takePass}
                error={userRegix.passMsg}
                helperText={userRegix.passHelper}
                id="outlined-basic" variant="outlined" style={{width:'20vw',fontSize:'12px'}} size='small'/>
                <div
                onClick={navToForget}
                style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' ,fontSize: '12px', color:'#9D9D9D'}}>Forget Password?</div>
                </div>
                <div className="buttonlogin">
                <Button 
                onClick={loginbtn}
                className="LoginFormButton" size="small" variant="contained" style={{width:'20vw',fontSize: '12px', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px',marginTop: '15px'  }}>
                    Login
                </Button>
                </div>
                <div className="Ornline">
                <div style={{ width: '5vw', height: '2px', backgroundColor: ' #E4E4E4', marginTop: '22px' }}></div>
                    <h4 style={{ marginTop: '8px',marginLeft:'-1vw' }}>OR</h4>
                    <div style={{ width: '5vw', height: '2px', backgroundColor: ' #E4E4E4', marginTop: '22px',marginLeft:'-1vw' }}></div>
                </div>
                
                {/* <div style={{ width: '5vw', height: '2px', backgroundColor: 'red', marginTop: '22px' }}></div> */}
                <div className="facebook">
                    <div className="btn1">
                    <Button size="small" variant="contained" style={{ textTransform: 'none', fontSize: '15px', marginRight: '0.5vw', marginTop:'-2vw', width: '9.9vw', backgroundColor: '#4266B2' }}>
                        FaceBook
                    </Button>
                    </div>
                    <div className="btn2">
                    <Button size="small" variant="outlined" style={{ textTransform: 'none', fontSize: '15px', width: '9.9vw', marginTop:'-2vw', backgroundColor: '#F5F5F5', borderColor: '#E4E4E4', color: '#0A0102' }}>
                        Google
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;