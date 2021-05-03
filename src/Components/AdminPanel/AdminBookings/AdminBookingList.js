import React from 'react';
import "./AdminBookingList.css"
const AdminBookingList = (props) => {
    const { name, email } = props.adminCart
    const car = props.adminCart.order[0]
    return (
        <div  >
            <div class="container mt-3 ">
                <div class="row bg-info text-light wide">
                    <div class="col">
                        {name}
                    </div>
                    <div class="col-6">
                        {email}
                    </div>
                    <div class="col">
                        {car}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminBookingList;