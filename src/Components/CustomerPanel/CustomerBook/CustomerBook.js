import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import "./CustomerBook.css"
import { useHistory, useParams } from 'react-router';
import { userCreate } from '../../../App';

const CustomerBook = () => {
    const { name, price } = useParams();
    const { register, handleSubmit, } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    const [addCart, setAddCart] = useState([name, price]);


    const onSubmit = data => {


        const orderDetails = { ...loggedInUser, order: addCart, addBook: data, orderTime: new Date() }
        console.log(orderDetails);
        fetch('https://fierce-harbor-56345.herokuapp.com/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // processOrder();
                    alert('Oppps!!!Your order placed successfully')
                }
            })
    };

    return (
        <div>

            <div className="form-container">
                <h4 className="input-header">Book Your Car</h4>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-container">
                            <div>
                                <h5 className="input-header">Your Name</h5>
                                <input className="form-input" value={loggedInUser.name} name="name" defaultValue="" {...register('name')} />
                            </div>
                            <div>
                                <h5 className="input-header">Your email</h5>
                                <input className="form-input" value={loggedInUser.email} name="email" defaultValue="" {...register('email')} />
                            </div>
                            <div>
                                <h5 className="input-header">Your Car</h5>
                                <input className="form-input" value={name} name="email" defaultValue="" {...register("car")} />
                            </div>
                            <div>
                                <h5 className="input-header">Price</h5>
                                <input className="form-input" value={price} name="email" defaultValue="" {...register("price")} />
                            </div>
                        </div>
                        <div className="btn-submit">  <input className="input-submit" type="submit" /></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerBook;