import React from 'react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";

import "./AddService.css"
import { userCreate } from '../../../App';


const AddService = () => {

    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    const onSubmit = data => {
        console.log(data.name);
        console.log(imageURL);
        const eventData = {
            name: data.name,
            price: data.price,
            imageUrl: imageURL
        }
        const newData = { ...loggedInUser, ...eventData }
        console.log(newData);
        alert('Submit Successful')

        const uri = `https://fierce-harbor-56345.herokuapp.com/addEvent`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
            .then(res => console.log("object"))
    }
    const handleImageUpload = event => {
        // console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', 'b98fa3a92f6f0ad1e5dcbfe2493f9000');
        imageData.set('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response)
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>

            <div className="form-container">
                <h4 className="input-header">Add Service</h4>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-container">

                            <div>
                                <h5 className="input-header">Car Name</h5>
                                <input className="form-input" name="name" defaultValue="" {...register('name')} />
                            </div>
                            <div>
                                <h5 className="input-header">Add Price</h5>
                                <input className="form-input" name="price" defaultValue=""  {...register('price')} />
                            </div>

                            <div className="upload-img">
                                <h5 className="input-header">Add Car Cover Image</h5>
                                <input className="img-upload-submit" onChange={handleImageUpload} name="imageURL" id="file" type='file' />
                                <label className="label" for="file">
                                    <i className="fas fa-image"></i>&nbsp;Choose a Photo
                    </label>
                            </div>
                        </div>

                        <div className="btn-submit">  <input className="input-submit" type="submit" /></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;