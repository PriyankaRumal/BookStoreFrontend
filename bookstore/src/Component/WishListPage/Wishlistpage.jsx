import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import '../WishListPage/Wishlistpage.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from "@mui/material";
import { GetWishlistApi ,Removefromwishlist} from "../../Services/dataservices";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";


function WishListPage() {
    const [wishlistArray,setWishlistArray]=useState([])

    const getallwishlist=()=>{
        GetWishlistApi()
        .then((response) => {
            console.log(response)
            setWishlistArray(response.data.data)
        }).catch((error) => { console.log(error) })
    }

    const autoRefresh=()=>{
        getallwishlist()
    }
    useEffect(() => {
        getallwishlist()

    }, [])

    let navigate = useNavigate()
    const movetohomepage=()=>{
        navigate('/BookSummary')
    }
    // const Removefromwishlist=(wishListId)=>{
    //     console.log(wishListId)
    //     Removefromwishlist(wishListId)
    //     .then((response) => {
    //         console.log(response)
    //     }).catch((error) => { console.log(error) })
    // }

    const RemoveWishlist=(wishListId)=>{
        Removefromwishlist(wishListId)
        .then((response) => {
            console.log(response)
            autoRefresh()
        }).catch((error) => { console.log(error) })
    }

    return (
        <div className="mainConOfWish">
            <Header />
            <div className="BookNWishList">
                <div className="home2" onClick={movetohomepage}>Home/</div>
                <div className="booktitle2">My Wishlist</div>
            </div>
            <div className="middlesec">
                <div className="MywishlistCount">
                   <div className="titlewish"> My Wishlist(02)</div> 
                </div>
                <div className="imageWishlist">
                {
                     wishlistArray.map((wish) => (
                    <div className="leftimgwish">
                        <div className="imgpartwish">
                            <img style={{ width: '60%', height: '60%', }} src={wish.book_Image} alt="" />
                        </div>
                        <div className="detailswish">
                            <div className="wishTitle">{wish.book_Name}</div>
                            <div className="wishauthor">{wish.author_Name}</div>
                            <div className="wishprice">
                                <div className="wishdis">Rs.{wish.discount_Price}</div>
                                <div className="castorg1">Rs.{wish.price}</div>
                            </div>
                        </div>
                        <div
                        onClick={()=>RemoveWishlist(wish.wishListId)}
                        className="deleteIcon">< DeleteIcon sx={{ color: '#9D9D9D' }}/></div>
                    </div>

                   )) }
                </div>
            </div>
        </div>
    )
}
export default WishListPage;