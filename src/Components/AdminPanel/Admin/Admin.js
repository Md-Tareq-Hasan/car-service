import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from '../../Navbar/Navbar';
import AddService from '../AddService/AddService';
import AdminBookings from '../AdminBookings/AdminBookings';

import Adminsidebar from '../Adminsidebar/Adminsidebar';
import ManageAdmin from '../ManageAdmin/ManageAdmin';
import "./Admin.css"

const Admin = () => {
    return (
        <div>
            <div className="bg-danger">
                <Navbar></Navbar>
            </div>
            <Router>
                <div className='admin-container'>
                    <div className='sidebar-container'>

                        <div className="sidebar"> <Adminsidebar></Adminsidebar></div>
                    </div>
                    <div className='edit-side-container'>
                        <Switch>
                            <Route path="/admin/addservice">
                                <AddService></AddService>
                            </Route>
                            <Route path="/admin/adminbookings">
                                <AdminBookings></AdminBookings>
                            </Route>
                            <Route path="/admin/manageadmin">
                                <ManageAdmin></ManageAdmin>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>

        </div>




    );
};

export default Admin;