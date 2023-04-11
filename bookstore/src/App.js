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
import { Table } from '@mui/material';
import Table1 from './Component/TableBox/Table';
import OrderBook from './Component/Order/OrderBook';
import AddrressComp1 from './Component/Address/AdrressComp1';
import AdrressComp2 from './Component/Address/AdrressComp2';

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
      {/* <Table/> */}
      {/* <Table1/> */}
      {/* <OrderBook/> */}
      {/* <AddrressComp1/> */}
      {/* <AdrressComp2/> */}
    </div>
  );
}

export default App;
