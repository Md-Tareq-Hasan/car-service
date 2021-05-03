import React from 'react';

const CustomerReview = (props) => {
    const { name, city, description } = props.reviewInfo;
    return (
        <div>

            <div className="card ml-3 text-white bg-info " style={{ maxWidth: "18rem" }}>
                <div className="card-header">
                    <h5>Name: {name}</h5>
                    <h5>City: {city}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">" {description} "</p>
                </div>

            </div>

        </div>
    );
};

export default CustomerReview;