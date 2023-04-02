import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignIn from "../Pages/SignIN/Signin";
import ForgetPassword from "../Pages/ForgetPassword/Forget";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Book2 from "../Component/BookBox2/Book2";
import Cart from "../Component/Cart/Cart";
import WishListPage from "../Component/WishListPage/Wishlistpage";
function Router1(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path= '/' element ={<SignIn/>} />
                    <Route path= '/forgetpassword' element ={<ForgetPassword/>} />
                    <Route path= '/resetpassword' element ={<ResetPassword/>} />
                    <Route path= '/dashboard' element ={<Dashboard/>} />
                    <Route path= '/BookSummary' element ={<Book2/>} />
                    <Route path= '/cart' element ={ <Cart/>} />
                    <Route path= '/wishlist' element ={ <WishListPage/>} />
    
                </Routes>
              
            </Router>
            
        </div>
    )
    
}
export default Router1;