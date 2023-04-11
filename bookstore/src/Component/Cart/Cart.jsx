import React, { useEffect, useState } from "react";
import '../Cart/Cart.css';
import Header from "../Header/Header";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetAllCart, Removefromcart ,AddToOrder} from "../../Services/dataservices";
import AddrressComp1 from "../Address/AdrressComp1";
import AdrressComp2 from "../Address/AdrressComp2";
function Cart(){
    const [cartArray, setCartArray] = useState([])
    const [toggle,setToggle]=useState(false)

    const toggling=()=>{
        setToggle(true)
    }
    const toggling2=()=>{
        setToggle(false)
    }
    console.log(cartArray)
    // let navigate=useNavigate();
    // const gotofrontpage=()=>{
    //     navigate('/')
    // }

    const getAllCart=()=>{
        GetAllCart()
        .then((response) => {
            console.log(response)
            setCartArray(response.data.data)
        }).catch((error) => { console.log(error) })
    }
    const autoRefresh = () => {
        getAllCart()
    }
    useEffect(() => {
        getAllCart()
    }, [])

    const deleteCart=(cartId)=>{
        console.log("Cart Id is",cartId)
      //  console.log(cartArray.cartId)
        Removefromcart(cartId)
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

    let navigate=useNavigate();
    const  movetoBookSummary=()=>{
        navigate('/BookSummary')
    }
    let navigate1=useNavigate();
    const orderAdd = { "addressId": 0, "bookId": 0,"bookQuantity":0 }
    const navigatetoOrderPage=()=>{
        orderAdd.addressId = 2
        orderAdd.bookId = Number(localStorage.getItem("bookId"))
        orderAdd.bookQuantity = 1
        AddToOrder(orderAdd)
            .then((response) => {
                console.log(response)
                localStorage.setItem("orderId", response.data.data)
                navigate1('/order')
            })
            .catch((error) => { console.log(error) })
        console.log(" add to order successful")
       
    }
   
    return(
        <div className="maincartdiv">
            <Header/>
            <div className="BookNHomeCart">
                <div className="home3" onClick={movetoBookSummary}>Home/</div>
                <div className="CartTitle">My Cart</div>
            </div>
            <div className="thirdcartCn">
                <div className="div1fortitle">
                    <div className="MyCart">My cart(1)</div>
                    <div className="seclocation">
                        <select style={{width:'100%',height:'100%'}} >
                            <LocationOnIcon/>
                            <option value= " Use Current Location"> Use Current Location</option>
                            <option value="Mumbai">Mumbai</option>
                                    <option value="Gurugram">Gurugram</option>
                                    <option value="New Delhi">New Delhi</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Banglore">Banglore</option>
                        </select>
                    </div>
                </div>
                <div className="imagecart">
                {
                     cartArray.map((cart) => (
                    <div className="leftimg">
                        <div className="imgpartcart">
                            <img style={{width:'80%',height:'80%',}} src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Abbe1fb99-6426-4256-a6d4-e80680f5665d&params=version%3A0&token=1680232944_da39a3ee_ed973141813b2dd15d76bdb5d528dc88c5418e4a&api_key=CometServer1" alt="" />
                        </div>
                        <div className="detailscart">
                            <div className="cartTitle">Dont Make Me Think</div>
                            <div className="cartauthor">by Steve Krug</div>
                            <div className="cartprice">
                                <div className="cartdis">Rs. 1500</div>
                                <div className="castorg">Rs. 2500</div>
                            </div>
                            <div className="counter">
                                <div className="counterbtns">
                                   <button type="button" style={{border:'1px solid #DBDBDB', borderRadius:'50%',fontSize:'16px'}}>-</button>
                                   <button style={{width:'40%',height:'70%' ,border:'1px solid #DBDBDB',backgroundColor:'#FAFAFA'}}>1</button>
                                   <button style={{ border:'1px solid #DBDBDB', borderRadius:'50%',fontSize:'15px'}}>+</button>
                                </div>
                                 <div onClick={()=>deleteCart(cart.cartId)}
                                 className="remod" style={{fontSize:'14px',marginLeft:'20px',cursor:'pointer'}}>Remove</div>
                            </div>
                        </div>
                    </div>
                    )) }
                </div>
                     
                <div className="btncart">
                <Button size="small" variant="outlined" style={{ textTransform: 'none', fontSize: '12px', width: '11vw',height:'55%', backgroundColor: '#3371B5', color: '#FCFCFC' ,borderRadius:'2px',marginRight:'4.5%',
                marginBottom:'1%'}}
                onClick={navigatetoOrderPage}
                >
                        PLACE ORDER
                    </Button>
                </div>
                
                  
            </div>
            <div className="thirddiv" style={{marginTop:'20px',marginLeft:'-15%'}}>
            {
                    toggle ? <AdrressComp2 toggling2={toggling2}/> :<AddrressComp1 toggling={toggling}/>
                  }
            </div>
        </div>
    )
}
export default Cart