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
            <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A34a6421f-a569-47b8-bc37-078211517464&params=version%3A0&token=1679631500_da39a3ee_2ca87d0cfde17a3530245803c57c8795619a6bc7&api_key=CometServer1" alt="" />
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