import React from 'react';
import "./AboutCarry.css"
import { faKey, faHandshake, faSmileBeam, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutCarry = () => {

    return (
        <div>
            <div className="carry-header">
                <h1  >Things you'll love about Car Carry <br /></h1>
                <p>SAY NO TO EMPTY SEATS</p>
            </div>
            <div className="about">
                <div className="about-boarder">
                    <i> <FontAwesomeIcon icon={faKey} /></i>
                    <div className="ml-5">
                        <h4>You’re In Control</h4>
                        <p>Verified member profiles &amp; ratings mean you know exactly who you're travelling with.</p>
                    </div>
                </div>
                <div className="about-boarder ">
                    <i> <FontAwesomeIcon icon={faHandshake} /></i>
                    <div className="ml-5">
                        <h4>Carpool With Confidence</h4>
                        <p>ID verification adds another level of security to member profiles.</p>
                    </div>
                </div>
                <div className="about-boarder ">
                    <i> <FontAwesomeIcon icon={faSmileBeam} /></i>
                    <div className="ml-5">
                        <h4>Ride Fully Insured</h4>
                        <p>We partner to cover your ride from start to finish, absolutely free of charge.</p>
                    </div>
                </div>
                <div className="about-boarder">
                    <i> <FontAwesomeIcon icon={faChalkboardTeacher} /></i>
                    <div className="ml-5">
                        <h4>Car Carry Points</h4>
                        <p>Earn points everytime you reserve a seat or rent a car &amp; get discounts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCarry;