import { Button } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import '../WishList/Wishlist.css'

function WishList(){
    return(
        <div className="mainwishlitst">
            <Header/>
            <div className="please">
                <div className="txt1">PLEASE LOG IN</div>
                <div className="txt2">Login to view items in your wishlist</div>
                <div className="wishlistimg">
                    <img width={'20%'} height={'100%'} src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A25799239-628e-4a28-9d28-9eaa24c158b2&params=version%3A0&token=1679716307_da39a3ee_8f47f0527fa11c1a260e5a43ffa3845541ec0da2&api_key=CometServer1" alt="" />
                </div>
                <div className="btnsigninlogin"><Button variant="outlined">Login/Signup</Button></div>
            </div>
        </div>
    )
}
export default WishList;