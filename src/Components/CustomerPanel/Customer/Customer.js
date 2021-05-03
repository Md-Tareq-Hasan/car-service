import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../../Home/Home';
import Navbar from '../../Navbar/Navbar';
import Bookings from '../Bookings/Bookings';
import CustomerBook from '../CustomerBook/CustomerBook';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import Review from '../Review/Review';
import "./Customer.css"

const Customer = () => {
  
    return (
        <div>
            <div className="bg-info">
            <Navbar></Navbar>
            </div>
            <Router>
        <div className='admin-container '>\
        
            <div className='sidebar-container'>
                <div className="sidebar">  <CustomerSidebar></CustomerSidebar></div>
            </div>
            <div className='edit-side-container'>
                <Switch>
                     <Route path="/customer/review">
                     <Review></Review>
                    </Route> 
                    <Route path="/customer/customerbook/:name/:price">
                      < CustomerBook></CustomerBook>
                    </Route>
                    <Route path="/customer/bookings">
                      <Bookings></Bookings>
                    </Route>  
                      
                </Switch> 
            </div>
        </div>
    </Router>
        </div>
    );
};

export default Customer;