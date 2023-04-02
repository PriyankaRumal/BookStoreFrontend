import axios from 'axios';
const headerConfig={
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}
const BaseUrl="https://localhost:44345/api/Book"
export const GetallBook=()=>{
    const response=axios.get(`${BaseUrl}/GetAllBook `,headerConfig)
    return response
}

export const GetBookById=(bookId)=>{
    const response=axios.get(`${BaseUrl}/GetBookByID?BookId=${bookId} `,headerConfig)
    return response
}
const BaseUrlCart="https://localhost:44345/api/Cart"
export const GetAllCart=()=>{
    const response=axios.get(`${BaseUrlCart}/RetriveFromCart `,headerConfig)
    return response
}
export const AddToCart=(data)=>{
    const response=axios.post(`${BaseUrlCart}/AddToCart `,data,headerConfig)
    return response
}
export const Removefromcart=(cartId)=>{
    const response=axios.delete(`${BaseUrlCart}/Delete?CartId=${cartId} `,headerConfig)
    return response
}
const BaseUrlWishlist="https://localhost:44345/api/WishList"
export const GetWishlistApi=()=>{
    const response=axios.get(`${BaseUrlWishlist}/GetWishList `,headerConfig)
    return response
}

export const AddToWishlist=(bookId)=>{
    const response=axios.post(`${BaseUrlWishlist}/AddToWishList?BookId=${bookId} `,null,headerConfig)
    return response
}

export const Removefromwishlist=(wishListId)=>{
    const response=axios.delete(`${BaseUrlWishlist}/Delete?WishListId=${wishListId} `,headerConfig)
    return response
}