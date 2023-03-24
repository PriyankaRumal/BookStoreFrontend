import React, { useState } from "react";
import Book1 from "../../Component/BookBox/Book1";
import Header from "../../Component/Header/Header";
import '../Dashboard/Dashboard.css';
import { useEffect } from "react";
import { GetallBook } from "../../Services/dataservices";
function Dashboard(){
    const [dataArray, setDataArray] = useState([])
    useEffect(() => {
        GetallBook()
            .then(response => {
                console.log(response)
                setDataArray(response.data.data)
            })
            .catch(error => {
                console.log(error)
                console.log("Books Retrived")
            })
    }, [])
    return(
        <div className="dashmain">
            <Header/>
            <div className="dashSec">
                <div className="Books">Books</div>
                <div className="selector">
                    <select name="Items" id="BooksCategory">
                        <option  >Sort by relevence</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        <option value="What's New">What's New</option>
                        <option value="Popularity">Popularity</option>
                        <option value="Better Discount">Better Discount</option>
                        <option value="Customer Rating">Customer Rating</option>
                    </select>
                </div>
            </div>
            <div className="books">
                {
                     dataArray.map((book) => (<Book1 book={book}/>))
                }
                
            </div>
        </div>
    )
}
export default Dashboard;