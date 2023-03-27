import React from "react";
import '../BookBox/Book1.css';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";

function Book1(props){
    let navigate=useNavigate();
    const openToBookBox2=()=>{
        const bookId = props.book.bookId;
        localStorage.setItem("bookId", JSON.stringify(bookId))
        navigate('/BookSummary')
    }
    return(
        <div className="mainBookContainer" onClick={openToBookBox2}>
            <div className="imagepart">
              {/* <div className="img1"> */}
              <img style={{width:'50%',height:'80%'}} src={props.book.book_Image} alt="" />
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