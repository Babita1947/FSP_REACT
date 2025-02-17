import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
    let [user, setUser] = useState([]);
    let [filter, setFilter] = useState('all');

    const getData = () => {
        axios.get("https://randomuser.me/api/?results=20")
            .then((res) => {
                setUser(res.data.results);
            })
            .catch((error) => {
                alert("SOMETHING WENT WRONG FETCHING DATA");
            });
    };

    const filteredUsers = user.filter((u) => filter === 'all' || u.gender === filter);

    return (
        <div className="container mt-5 text-center">
            <h2>USER DETAILS</h2>
            <button onClick={getData} className="btn btn-primary my-3">GET DATA</button>

            <div className="my-3 d-flex justify-content-center">
                <div className="form-check mx-2">
                    <input type="radio" id="all" name="gender" className="form-check-input" checked={filter === 'all'} onChange={() => setFilter('all')} />
                    <label htmlFor="all" className="form-check-label">All</label>
                </div>
                <div className="form-check mx-2">
                    <input type="radio" id="male" name="gender" className="form-check-input" checked={filter === 'male'} onChange={() => setFilter('male')} />
                    <label htmlFor="male" className="form-check-label">Male</label>
                </div>
                <div className="form-check mx-2">
                    <input type="radio" id="female" name="gender" className="form-check-input" checked={filter === 'female'} onChange={() => setFilter('female')} />
                    <label htmlFor="female" className="form-check-label">Female</label>
                </div>
            </div>

            {filteredUsers.length > 0 ? (
                <table className='table table-hover table-striped table-responsive'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>IMAGE</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                            <th>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((element, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.name.first} {element.name.last}</td>
                                <td><img src={element.picture.medium} height={80} width={80} alt="NO IMAGE" className="rounded-circle"/></td>
                                <td>{element.gender}</td>
                                <td>{element.email}</td>
                                <td>{element.location.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2 className="text-danger text-center my-4">NO DATA FOUND</h2>
            )}
        </div>
    );
}

export default User;
