import React from 'react';
import "./BookingList.css"
const BookingList = (props) => {

    const name = props.bookItem[0];
    const price = props.bookItem[1];

    console.log(name, price)
    return (
        <div className="background">
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Car</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{name}</td>
                        <td>$ {price}</td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default BookingList;