import React, { useEffect, useState } from "react";
import '../BookBox2/Book2.css'
import Header from "../Header/Header";
import { Button, TextField } from "@mui/material";
import { borderRadius } from "@mui/system";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { GetBookById } from "../../Services/dataservices";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../../Services/dataservices";

function Book2() {
    const [value, setValue] = React.useState(2);
    const [bookDetail, setBookDetail] =useState([]);
    const bookId=JSON.parse(localStorage.getItem("bookId"));
    console.log(bookDetail)

    useEffect(() => {
        GetBookById (bookId)
        .then((response) => {
          console.log(response)
          setBookDetail(response.data.data)
        }).catch((error) => {
          console.log(error)
        })
      }, [])

      let navigate=useNavigate();
      const navtohome=()=>{
        navigate('/dashboard')
      }

      const cartdata = {"bookId":0,"book_Count":0}
      let navigate1=useNavigate();
      const movetocartpage=()=>{
        cartdata.bookId=Number(localStorage.getItem("bookId"))
        cartdata.book_Count=1
        AddToCart(cartdata)
        .then((response) => {
            console.log(response)
            localStorage.setItem("cartId", response.data.data)
            navigate1('/cart')
          })
          .catch((error) => { console.log(error) })
        console.log(" add to cart successful")
      }
      
        
    return (
        <div className="mainBook2">
            <Header />
            <div className="BookNHome">
                <div className="home1" onClick={navtohome}>Home/</div>
                <div className="booktitle">Book(01)</div>
            </div>
            <div className="secdiv">
                <div className="bookContainer2">
                    <div className="imgpart2">
                        <img style={{width:'80%',height:'80%'}} src={bookDetail.book_Image} alt="" />
                    </div>
                    <div className="buttonsofbook">
                        <Button
                          onClick={movetocartpage}
                            className="AddToButton" size="small" variant="contained" style={{ width: '48%', height: '90%', fontSize: '14px', backgroundColor: '#A03037', textTransform: 'none', borderRadius: '2px' }}>
                            ADD TO BAG
                        </Button>
                        <Button
                            className="AddToButton" size="small" variant="contained" style={{
                                width: '48%', height: '90%', fontSize: '14px', backgroundColor: '#333333',
                                textTransform: 'none', borderRadius: '2px'
                            }}>
                            <FavoriteIcon fontSize="small" style={{marginRight:'10px'}}/>
                            WishList
                        </Button>
                    </div>
                </div>
                <div className="bookdeatils2">
                    <div className="block1">
                        <div className="titlebook2">
                            {bookDetail.book_Name}
                            </div>
                        <div className="authoebook2">{bookDetail.author_Name}</div>
                        <div className="ratingbook2">
                            <div className="rate">{bookDetail.rating} <StarIcon fontSize="xxsmall" style={{color:'#F5F5F5',marginLeft:'2px'}}/></div>
                            <div className="count">{bookDetail.book_Count}</div>
                        </div>
                        <div className="pricebook2">
                            <div className="price2"> {bookDetail.price}</div>
                            <div className="oriprice2">{bookDetail.discount_Price}</div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: '#9D9D9D' }}></div>
                    <div className="block2">
                        <div className="BookDetails">Book Details</div>
                        <div className="bookdecre">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estundefined
                            {/* {bookDetail.description} */}
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: '#9D9D9D' }}></div>
                    <div className="block3">
                        <div className="customer">Customer Feedback</div>
                            <div className="ratingcount">
                            <Typography style={{marginLeft:'10px',textAlign:'start',marginTop:'20px'}} component="legend">Overall Rating</Typography>
                            <Rating
                                style={{marginLeft:'12px',marginTop:'5px'}}
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        <TextField  style={{width:'90%',backgroundColor:'#F5F5F5',marginTop:'20px',marginLeft:'10px'}} placeholder={"Write your Review"} ></TextField>
                        <Button size="small" variant="contained" style={{width:'15%',height:'12%', fontSize: '12px', backgroundColor: '#3371B5',
                                textTransform: 'none', borderRadius: '2px',marginLeft:'500px',marginTop:'12px'
                            }}>
                            Submit
                        </Button>
                            </div>
                       
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Book2;