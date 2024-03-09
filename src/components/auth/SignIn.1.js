import { React, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { signInWithGoogle } from '../../context/AuthContext';

export const SignIn = () => {
    const [form, setForm] = useState({});
    const [users, setUsers] = useState([]);

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://veganhubserver.onrender.com/demo', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            return <Navigate to="/" />;
        }
    };

    const getUsers = async () => {
        const response = await fetch('https://veganhubserver.onrender.com/demo', {
            method: 'GET',
        });
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="sign-in-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required=""
                            name="username"
                            onChange={handleForm}
                            className="bg-gray-200 rounded-md px-4 py-2 w-full" />
                        <label className="block text-gray-700">Username</label>
                    </div>

                    <div className="user-box mb-4">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full" />
                        <label className="block text-gray-700">Password</label>
                    </div>

                    <div className="user-box mb-4">
                        <input
                            type="number"
                            placeholder="Enter your age"
                            name="age"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full" />
                        <label className="block text-gray-700">Age</label>
                    </div>

                    <div className="user-box mb-4">
                        <select
                            name="gender"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        >
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {/* <label className="block text-gray-700">Gender</label> */}
                    </div>

                    <div className="user-box mb-4">
                        <select
                            name="delivery"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        >
                            <option value="">Select mode of delivery</option>
                            <option value="self-pickup">Self-pickup</option>
                            <option value="home-delivery">Home delivery</option>
                        </select>
                        {/* <label className="block text-gray-700">Mode of delivery</label> */}
                    </div>

                    <div className="login">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log In</button>
                    </div>

                    <ul>
                        {users.map(user => <li key={user._id}>{user.username},{user.password}</li>)}
                    </ul>
                    <hr className="my-5" />

                    <div className="text-white">
                        Don't have an account? <a href="/register" className="text-white hover:text-blue-600">Sign Up</a>
                    </div>

                    <div className="mt-5 text-center">
                        <button onClick={signInWithGoogle} type="submit" className="btn btn-primary">Google Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};