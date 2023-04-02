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
            <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A9a358a4d-815f-4096-94c5-ad3000359044&params=version%3A0&token=1680232944_da39a3ee_ed973141813b2dd15d76bdb5d528dc88c5418e4a&api_key=CometServer1" alt="" />
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