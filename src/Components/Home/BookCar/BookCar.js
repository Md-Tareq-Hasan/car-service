import React from 'react';
import "./BookCar.css"
import { Link } from 'react-router-dom'

const BookCar = (props) => {

    const { name, price, imageUrl } = props.bookInfo;


    return (
        <div className="mt-2 ml-3" >
            <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt=""></img>
                <div className="card-container card-body">
                    <h5 className="card-title">{name}</h5>
                    <h3 className="ml-auto">${price}</h3>
                    <Link to={`/customer/customerbook/${name}/${price}`}><a href="#" className="btn btn-dark">Book Now</a></Link>
                </div>
            </div>



        </div>
    );
};

export default BookCar;