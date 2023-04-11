import React, { useEffect, useState } from "react";
import '../Order/OrderBook.css'
import Header from "../Header/Header";
import DeleteIcon from '@mui/icons-material/Delete';
import { colors } from "@mui/material";
import { GetAllOrder } from "../../Services/dataservices";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { cancelOrderApi } from "../../Services/dataservices";
import AddrressComp1 from "../Address/AdrressComp1";
import AdrressComp2 from "../Address/AdrressComp2";




function OrderBook(){
    const [orderData ,setOrderData]=useState([])
  
    
    let navigate=useNavigate();
    const movetohome=()=>{
        navigate('/BookSummary')
    }

    const GetAllOrderBook=()=>{
        GetAllOrder()
        .then((response) => {
            console.log(response)
            setOrderData(response.data.data)
        }).catch((error) => { console.log(error) })
    }
    const autoRefresh = () => {
        GetAllOrderBook()
    }
    useEffect(() => {
        GetAllOrderBook()
    }, [])



    const CancelOrder=(orderId)=>{
        cancelOrderApi(orderId)
        .then(response => {
            console.log(response)
           // localStorage.setItem('token',response.data.data)
           //  navigate('/dashboard')
          autoRefresh();
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
    <div className="maincontainerOrder">
        <Header/>
        <div className="BookOrder">
                <div className="home3" onClick={movetohome}>Home/</div>
                <div className="bookOrdertotle">My Order</div>
            </div>

            <div className="middlesecOrder">
                <div className="MywishlistCountorder">
                   <div className="titleOrder"> My Order(02)</div> 
                </div>
                <div className="imageOrder">
                {
                     orderData.map((order) => (
                    <div className="leftimgorder">
                        <div className="imgpartorder">
                            <img style={{ width: '60%', height: '60%', }} src={order.book_Image} alt="" />
                        </div>
                        <div className="detailsorder">
                            <div className="orderTitle">{order.book_Name}</div>
                            <div className="orderauthor">{order.author_Name}</div>
                            <div className="orderprice">
                                <div className="orderdis">Rs {order.discount_Price}</div>
                                <div className="castorg2">Rs {order.price}</div>
                            </div>
                        </div>
                        <div
                       // onClick={()=>RemoveWishlist(wish.wishListId)}
                        className="orderplacedate">
                            <ul>
                           <li>Order Placed on {order.orderDate}</li> 
                         </ul>
                         <Button size="small" variant="outlined" style={{ textTransform: 'none', fontSize: '12px', width: '40%',height:'25%', backgroundColor: '#A03037',border:'1px solid #A03037' ,color: '#FCFCFC' ,borderRadius:'2px',marginTop:'5%',marginLeft:'60%'}}
                         onClick={()=>CancelOrder(order.orderId)}
                >
                        Cancel Order
                    </Button>
                         </div>
                    </div>

 )) } 
                </div>
               
            </div>
            
    </div>
    
    )
}
export default OrderBook;