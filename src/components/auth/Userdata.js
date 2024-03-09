import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/users'); // Assuming your backend route to fetch user data is '/api/users'
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>User Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Delivery</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.delivery}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserData;
