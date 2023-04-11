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
import { GetBookById, GetWishlistApi } from "../../Services/dataservices";
import { useNavigate } from "react-router-dom";
import { AddToCart, AddToWishlist, GetAllFeedbackApi ,GiveFeedbackApi} from "../../Services/dataservices";



function Book2() {
    const [value, setValue] = React.useState(2);
    console.log(value)
    const [bookDetail, setBookDetail] = useState([]);
    const bookId = JSON.parse(localStorage.getItem("bookId"));
    console.log(bookDetail)

    const [feedbackdetails, setFeedackDetails] = useState([]);
    const [getfeedback, setGetFeedback] = useState({
        bookId: Number(localStorage.getItem("bookId")),
        rating: '',
        comment: ''
    })

    const enterRating=(event)=>{
        setGetFeedback((prevState) => ({ ...prevState, rating: (event.target.value) }));
    }
    const enterComment=(event)=>{
        setGetFeedback((prevState) => ({ ...prevState, comment: (event.target.value) }));
    }

    const AddFeedbackApi=()=>{
        GiveFeedbackApi(getfeedback)
        .then((response) => {
            console.log(response)
           // setGetFeedback(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        GetBookById(bookId)
            .then((response) => {
                console.log(response)
                setBookDetail(response.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    let navigate = useNavigate();
    const navtohome = () => {
        navigate('/dashboard')
    }

    const cartdata = { "bookId": 0, "book_Count": 0 }
    let navigate1 = useNavigate();
    const movetocartpage = () => {
        cartdata.bookId = Number(localStorage.getItem("bookId"))
        cartdata.book_Count = 1
        AddToCart(cartdata)
            .then((response) => {
                console.log(response)
                localStorage.setItem("cartId", response.data.data)
                navigate1('/cart')
            })
            .catch((error) => { console.log(error) })
        console.log(" add to cart successful")
    }

    const Wishlistdata = { "bookId": 0 }
    let navigate2 = useNavigate()
    const movetoWishlist = () => {
        Wishlistdata.bookId = Number(localStorage.getItem("bookId"))
        console.log(Wishlistdata.bookId)
        AddToWishlist(Wishlistdata.bookId)
            .then((response) => {
                console.log(response)
                localStorage.setItem("wishListId", response.data.data)
                navigate2('/wishlist')
            })
            .catch((error) => { console.log(error) })
        console.log(" add to wishlist successful")

    }

    useEffect(() => {
        GetAllFeedbackApi(bookId)
            .then((response) => {
                console.log(response)
                setFeedackDetails(response.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="mainBook2">
            <Header />
            <div className="BookNHome">
                <div className="home1" onClick={navtohome}>Home/</div>
                <div className="booktitle">Book({bookDetail.bookId})</div>
            </div>
            <div className="secdiv">
                <div className="bookContainer2">
                    <div className="imgpart2">
                        <img style={{ width: '80%', height: '80%' }} src={bookDetail.book_Image} alt="" />
                    </div>
                    <div className="buttonsofbook">
                        <Button
                            onClick={movetocartpage}
                            className="AddToButton" size="small" variant="contained" style={{ width: '48%', height: '90%', fontSize: '14px', backgroundColor: '#A03037', textTransform: 'none', borderRadius: '2px' }}>
                            ADD TO BAG
                        </Button>
                        <Button
                            onClick={movetoWishlist}
                            className="AddToButton" size="small" variant="contained" style={{
                                width: '48%', height: '90%', fontSize: '14px', backgroundColor: '#333333',
                                textTransform: 'none', borderRadius: '2px'
                            }}>
                            <FavoriteIcon fontSize="small" style={{ marginRight: '10px' }} />
                            WISHLIST
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
                            <div className="rate">{bookDetail.rating} <StarIcon fontSize="xxsmall" style={{ color: '#F5F5F5', marginLeft: '2px' }} /></div>
                            <div className="count">{bookDetail.book_Count}</div>
                        </div>
                        <div className="pricebook2">
                            <div className="price2"> Rs. {bookDetail.price}</div>
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
                            <Typography style={{ marginLeft: '10px', textAlign: 'start', marginTop: '20px' }} component="legend">Overall Rating</Typography>
                            <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={enterRating} />

                            <TextField style={{ width: '90%', backgroundColor: '#F5F5F5', marginTop: '20px', marginLeft: '10px' }} placeholder={"Write your Review"} 
                            onChange={enterComment}
                            ></TextField>
                            <Button size="small" variant="contained" style={{
                                width: '15%', height: '12%', fontSize: '12px', backgroundColor: '#3371B5',
                                textTransform: 'none', borderRadius: '2px', marginLeft: '500px', marginTop: '12px'
                            }}  onClick={AddFeedbackApi}>
                                Submit
                            </Button>
                        </div>
                        <div className="feedbackbox">
                            {
                                feedbackdetails.map((feedback) => (
                                    <div className="feedbackuser">
                                        <div className="fullname">
                                            <div1 className="initials">AC</div1>
                                            <div className="nameofuser">{feedback.fullName}</div>
                                        </div>
                                        <div className="ratingstar">
                                            <Rating name="half-rating" defaultValue={feedback.rating} precision={0.5} />
                                        </div>
                                        <div className="commentuser">
                                            {feedback.comment}
                                            {/* Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct*/}
                                            .</div>
                                    </div>



                                ))
                            }

                        </div>

                    </div>


                </div>


            </div>

        </div>
    )
}
export default Book2;