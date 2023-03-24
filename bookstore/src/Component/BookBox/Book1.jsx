import React from "react";
import '../BookBox/Book1.css';
import StarIcon from '@mui/icons-material/Star';

function Book1(props){
    return(
        <div className="mainBookContainer">
            <div className="imagepart">
              {/* <div className="img1"> */}
              <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A2fc5cbdd-6739-4109-8fe3-577ff0ceef47&params=version%3A0&token=1679716307_da39a3ee_8f47f0527fa11c1a260e5a43ffa3845541ec0da2&api_key=CometServer1" alt="" />
            {/* </div> */}
            </div>
            <div className="TitleInfo">
                <div className="content">
                <div className="title1">{props.book.book_Name}</div>
                <div className="author1">{props.book.author_Name}</div>
                <div className="rating1">
                    <div className="greeen">{props.book.rating} <StarIcon fontSize="xsmall"/></div>
                    <div className="ratecount">{props.book.rating_Count}</div>
                </div>
                <div className="price1">
                    <div className="boldprice"> Rs. {props.book.price}</div>
                    <div className="under">{props.book.discount_Price}</div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Book1;