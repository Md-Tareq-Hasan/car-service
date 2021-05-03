import React, { useContext, useEffect, useState } from 'react';
import { userCreate } from '../../../App';
import BookingList from '../BookingList/BookingList';
import "./Bookings.css"

const Bookings = () => {
    const [bookCart, setBookCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    console.log(loggedInUser)
    useEffect(() => {
        const url = `https://fierce-harbor-56345.herokuapp.com/oderbook?email=${loggedInUser.email}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookCart(data);

            })
    }, []);
    return (
        <div className="bookings">
            {
                bookCart.map((bookItem, index) => <BookingList bookItem={bookItem.order} key={index}></BookingList>)
            }

        </div>
    );
};

export default Bookings;