import React, { useEffect, useState } from "react";
import '../TableBox/Table.css'
import Header from "../Header/Header";
import { GetallBook } from "../../Services/dataservices";
function Table1() {

    const [bookDetailtable, setBookDetailtable] = useState([]);
    useEffect(() => {
        GetallBook()
            .then((response) => {
                console.log(response)
                setBookDetailtable(response.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="mainClassTale">
            <Header />
            <div className="tableBox">
                <table className="tableClass">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>Book Desciption</th>
                            <th>Book Quantity</th>
                            <th>Rating</th>
                        </tr>
                    </thead>

                    {
                        bookDetailtable.map((cart) => (
                            <tbody>
                                <tr>
                                    <td>{cart.book_Name}</td>
                                    <td>{cart.author_Name}</td>
                                    <td>{cart.description}</td>
                                    <td>{cart.book_Count}</td>
                                    <td>{cart.rating}</td>
                                </tr>
                                
                            </tbody>
                         ))} 

                </table>
            </div>
        </div>
    )
}
export default Table1;