import React, { useContext, useEffect, useState } from 'react';
import { userCreate } from '../../../App';
import AdminBookingList from './AdminBookingList';
import "./AdminBookings.css"

const AdminBookings = () => {
    const [adminCart, setAdminCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    console.log(loggedInUser)
    useEffect(() => {
        const url = "https://fierce-harbor-56345.herokuapp.com/ordercheck"
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdminCart(data);

            })
    }, []);
    return (
        <div>
            <div class="container mt-3 ">
                <div class="row bg-info text">
                    <div class="col">
                        <h5>Name</h5>
                    </div>
                    <div class="col-6">
                        <h5>Email</h5>
                    </div>
                    <div class="col">
                        <h5>Car</h5>
                    </div>
                </div>
            </div>
            {
                adminCart.map((adminCart, index) => <AdminBookingList adminCart={adminCart} key={index}></AdminBookingList>)
            }

        </div>
    );
};

export default AdminBookings;