import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { userCreate } from '../../../App';
import './Review.css'
const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    const onSubmit = data => {
        console.log(data.name);

        const eventData = {
            name: data.name,
            city: data.city,
            description: data.description
        }
        const newData = { ...loggedInUser, ...eventData }
        console.log(eventData);
        alert('Submit Successful')

        const uri = `https://fierce-harbor-56345.herokuapp.com/addReview`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
            .then(res => console.log("object"))
    }
    return (
        <div>

            <div className="form-container">
                <h4 className="input-header">Review</h4>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-container">

                            <div>
                                <h5 className="input-header">Your Name</h5>
                                <input className="form-input" name="name" defaultValue="" {...register('name')} />
                            </div>
                            <div>
                                <h5 className="input-header">Your City</h5>
                                <input className="form-input" name="city" defaultValue="" {...register('city')} />
                            </div>

                            <div class="form-group">
                                <h5 className="input-header">Description</h5>
                                <textarea class="description-header" id="exampleFormControlTextarea1" name="description" defaultValue=""  {...register('description')} rows="3"></textarea>
                            </div>
                        </div>

                        <div className="btn-submit">  <input className="input-submit" type="submit" /></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;