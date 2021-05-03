import React from 'react';
import { faHeart, faRoad, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Information.css"
const Information = () => {
    return (
        <div className="info-body ">
            <div className=" d-flex  ">
                <div className="info-container">
                    <i> <FontAwesomeIcon icon={faHeart} /></i>
                </div>
                <div className="ml-2 ">
                    <h1>20</h1>
                    <h5>User Love Car Carry</h5>
                </div>
            </div>
            <div className=" d-flex  ">
                <div className="info-container">
                    <i> <FontAwesomeIcon icon={faRoad} /></i>
                </div>
                <div className="ml-2 ">
                    <h1>4329</h1>
                    <h5>Ride Made Per Day</h5>
                </div>
            </div>
            <div className=" d-flex  ">
                <div className="info-container">
                    <i> <FontAwesomeIcon icon={faStar} /></i>
                </div>
                <div className="ml-2 ">
                    <h1>321</h1>
                    <h5>Ratings Made Daily</h5>
                </div>
            </div>
            <div className=" d-flex  ">
                <div className="info-container">
                    <i> <FontAwesomeIcon icon={faUserFriends} /></i>
                </div>
                <div className="ml-2 ">
                    <h1>100</h1>
                    <h5>New Users Register Daily</h5>
                </div>
            </div>
        </div>
    );
};

export default Information;