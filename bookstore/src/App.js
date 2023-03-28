import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIN/Signin';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import ForgetPassword from './Pages/ForgetPassword/Forget';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Router1 from './Router/Router';
import Header from './Component/Header/Header';
import Book1 from './Component/BookBox/Book1';
import WishList from './Component/WishList/Wishlist';
import Dashboard from './Pages/Dashboard/Dashboard';
import Book2 from './Component/BookBox2/Book2';
import WishListPage from './Component/WishListPage/Wishlistpage';
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <div className="App">
      
        {/* <SignIn/> */}
        {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <ForgetPassword/> */}
      {/* <ResetPassword/> */}
      <Router1/>
      {/* <Header/> */}
      {/* <Book1/> */}
      {/* <WishList/> */}
      {/* <Dashboard/> */}
      {/* <Book2/> */}
      {/* <WishListPage/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
