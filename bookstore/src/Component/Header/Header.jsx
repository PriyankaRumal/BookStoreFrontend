import React from "react";
import '../Header/Header.css';
 import SearchIcon from '@mui/icons-material/Search';
import  Button from  '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
 function Header(){
    return(
        <>
        <div className="MainHeader">
           <div className="imglogo">
            <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Aa5b33713-5c6d-45cb-8c64-81e6721d4f29&params=version%3A0&token=1680672454_da39a3ee_6458f09b5c649210e2cac3e09220abe30f5daace&api_key=CometServer1" alt="" />
            <div className="maintxt">BookStore</div>
           </div>
           <div className="searchbar">
           <div className='icon'><Button> <SearchIcon style={{ color: '#5f6368' }}/> </Button></div>
           <div className='input'><InputBase placeholder="Search" /></div>
           </div>
           <div className="profilelogo">
            <div className="div1">
            <Button> <PersonOutlineIcon style={{ color: '#ffff' }}  fontSize="small"/></Button>
            </div>
            <div className="profile">Profile</div>
           </div>
           <div className="Cartlogo">
            <div className="div2">
            <Button> <ShoppingCartOutlinedIcon style={{ color: '#ffff' }}  fontSize="small" /></Button>
            </div>
            <div className="cart">Cart</div>
           </div>
         </div>
        </>
        
    )
 }
 export default Header