import React, { useEffect, useState } from 'react';

const ManageAdmin = () => {
    const [bookInfo, setBookInfo] = useState([]);
    useEffect(() => {
        fetch('https://fierce-harbor-56345.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setBookInfo(data);

            })

    }, [bookInfo])
    const handleDelete = (id) => {
        const uri = `https://fierce-harbor-56345.herokuapp.com/delete/${id}`
        fetch(uri, {
            method: 'Delete'
        })
            .then(res => res.json())

    }
    return (
        <div className="delete-event-container ">
            <table class="table table-striped table-hover tb">
                <thead className="table-info">
                    <tr>
                        <th scope="col">Car Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    bookInfo.map(bookInfo =>
                        <tbody>
                            <tr>
                                <td>{bookInfo.name} </td>

                                <td>{bookInfo.price} </td>
                                <td><button onClick={() => handleDelete(bookInfo._id)} className="delete-btn">Delete</button></td>
                            </tr>
                        </tbody>)}
            </table>
        </div>
    );
};

export default ManageAdmin;