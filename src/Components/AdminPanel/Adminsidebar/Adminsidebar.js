import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { faCarSide, faPlus, faUser, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Adminsidebar.css"
import { userCreate } from '../../../App';
const AdminSidebar = () => {
    

    let history = useHistory();
    const handleManageService = () => {
        history.push('/admin/manageadmin');
    }
    const handleAddService = () => {
        history.push('/admin/addservice');
    }
    const handleAdminBookings = () => {
        history.push('/admin/adminbookings');
    }

    return (
        <div className="sidebar-container">

            <div className="sidebar-nav">
                <button className="sidebar-btn text-light" onClick={handleAdminBookings}><i className="mr-2"><FontAwesomeIcon icon={faCarSide} /></i>Booking List</button>
                <button className="sidebar-btn text-light" onClick={handleAddService}><i><FontAwesomeIcon className="mr-2" icon={faPlus} /></i>Add Service</button>
                <button className="sidebar-btn text-light" ><i><FontAwesomeIcon className="mr-2" icon={faUser} /></i>Make Admin</button>
                <button className="sidebar-btn text-light" onClick={handleManageService} ><i><FontAwesomeIcon className="mr-2" icon={faTasks} /></i>Manage Service</button>
            </div>
        </div>
    );
};

export default AdminSidebar;