import axios from 'axios'
const headerConfig={
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}
const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}
export const SignInApi = (data) => {
    console.log("before")
    const response = axios.post('https://localhost:44345/api/User/Login',data,)
    console.log("after")
    return response
}
export const SignUpApi = (data1) => {
    console.log("before")
    const response = axios.post('https://localhost:44345/api/User/UserRegistration',data1)
    console.log("after")
    return response
}
export const ForgetApi=(Email_Id)=>{
    console.log("before")
    const response=axios.post(`https://localhost:44345/api/User/forget?Email_Id=${Email_Id}`,null)
    console.log("after")
    return response
}
export const ResetApi=(newObj)=>{
    console.log("before,rest before")
    console.log(newObj)
    const response=axios.put(`https://localhost:44345/api/User/reset?newpassword=${newObj.newpassword}&confirmpass=${newObj.confirmpass}`,null,headerConfig)
    console.log("after")
    return response
}