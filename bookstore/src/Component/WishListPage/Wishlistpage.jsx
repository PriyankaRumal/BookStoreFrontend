import React from "react";
import Header from "../Header/Header";
import '../WishListPage/Wishlistpage.css'

function WishListPage(){

    return(
        <div className="mainConOfWish">
            <Header/>
            <div className="BookNWishList">
                <div className="home2">Home/</div>
                <div className="booktitle2">My Wishlist</div>
            </div>
            <div className="middlesec"></div>
        </div>
    )
}
export default WishListPage;