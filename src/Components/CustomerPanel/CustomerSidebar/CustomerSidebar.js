import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { faCarSide, faTasks, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./CustomerSidebar.css"
const CustomerSidebar = () => {

    let history = useHistory();
    const handleBookings = () => {
        history.push('/customer/bookings');
    }

    const handleReview = () => {
        history.push('/customer/review');
    }
    return (
        <div className="sidebar-container">
            <div className="sidebar-nav">

                <button className="sidebar-btn text-light" onClick={handleBookings} ><i className="mr-2"><FontAwesomeIcon icon={faCarSide} /></i>Booking List</button>
                <button className="sidebar-btn text-light" ><i><FontAwesomeIcon className="mr-2" icon={faCarSide} /></i>Book</button>
                <button className="sidebar-btn text-light" onClick={handleReview} ><i><FontAwesomeIcon className="mr-2" icon={faTasks} /></i>Review</button>
            </div>
        </div>
    );
};

export default CustomerSidebar;