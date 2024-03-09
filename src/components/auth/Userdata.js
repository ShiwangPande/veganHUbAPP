import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://veganhubserver.onrender.com/api/users');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="bg-gray-900 text-white p-4">
            <h1 className="text-2xl mb-4">User Data</h1>
            <table className="w-full border-collapse border border-gray-700">
                <thead>
                    <tr>
                        <th className="p-3 border-b border-gray-700">Email</th>
                        <th className="p-3 border-b border-gray-700">Age</th>
                        <th className="p-3 border-b border-gray-700">Gender</th>
                        <th className="p-3 border-b border-gray-700">Delivery</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id} className="border-b text-center border-gray-700">
                            <td className="p-3">{user.email}</td>
                            <td className="p-3">{user.age}</td>
                            <td className="p-3">{user.gender}</td>
                            <td className="p-3">{user.delivery}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserData;
