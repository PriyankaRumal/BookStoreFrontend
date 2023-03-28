import React, { useEffect, useState } from "react";
import '../Cart/Cart.css';
import Header from "../Header/Header";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetAllCart, Removefromcart } from "../../Services/dataservices";
function Cart(){
    const [cartArray, setCartArray] = useState([])
    console.log(cartArray)
    // let navigate=useNavigate();
    // const gotofrontpage=()=>{
    //     navigate('/')
    // }
    useEffect(() => {
        GetAllCart()
            .then((response) => {
                console.log(response)
                setCartArray(response.data.data)
            }).catch((error) => { console.log(error) })
    }, [])

    const deleteCart=()=>{
        console.log(cartArray)
        console.log(cartArray.cartId)
        Removefromcart(cartArray.cartId)
        .then(response => {
            console.log(response)
           // localStorage.setItem('token',response.data.data)
           //  navigate('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return(
        <div className="maincartdiv">
            <Header/>
            <div className="BookNHomeCart">
                <div className="home3">Home/</div>
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
                            <img style={{width:'80%',height:'80%',}} src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A10fa5960-ae05-4a11-9365-133f07ce7183&params=version%3A0&token=1680068989_da39a3ee_45411e1d0da09e760a8797d3fcf6a6635603d79e&api_key=CometServer1" alt="" />
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
                                 <div onClick={deleteCart}
                                 className="remod" style={{fontSize:'14px',marginLeft:'20px'}}>Remove</div>
                            </div>
                        </div>
                    </div>
                    )) }
                </div>
                     
                <div className="btncart">
                <Button size="small" variant="outlined" style={{ textTransform: 'none', fontSize: '12px', width: '11vw',height:'55%', backgroundColor: '#3371B5', color: '#FCFCFC' ,borderRadius:'2px',marginRight:'4.5%'}}>
                        PLACE ORDER
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Cart