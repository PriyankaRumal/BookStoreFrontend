import axios from 'axios';
const headerConfig={
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}
const BaseUrl="https://localhost:44345/api/Book"
export const GetallBook=()=>{
    const response=axios.get(`${BaseUrl}/GetAllBook `,headerConfig)
    return response
}