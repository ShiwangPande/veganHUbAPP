import { React, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { signInWithGoogle } from '../../context/AuthContext';
import './Signup.css';


const SignIn = () => {
    const [form, setForm] = useState({});
    const [users, setUsers] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://veganhubserver.onrender.com/demo', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            // Redirect to the home page
            setLoggedIn(true); // Set loggedIn to true after successful login
            window.location.href = '/'; // Redirect to the home page
        }
    }

    const getUsers = async () => {
        const response = await fetch('http://veganhubserver.onrender.com/demo', {
            method: 'GET',
        })
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])

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
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        />
                        <label className="block text-gray-700">Username</label>
                    </div>

                    <div className="user-box mb-4">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        />
                        <label className="block text-gray-700">Password</label>
                    </div>

                    <div className="user-box mb-4">
                        <input
                            type="number"
                            placeholder="Enter your age"
                            name="age"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        />
                        <label className="block text-gray-700">Age</label>
                    </div>

                    <label className="block text-[#03e9f4]">Gender</label>
                    <div className="user-box mb-4">
                        <select
                            name="gender"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        >
                            <option value="" disabled selected>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <label className="block text-[#03e9f4]">Mode of delivery</label>
                    <div className="user-box mb-4">
                        <select
                            name="delivery"
                            onChange={handleForm}
                            required=""
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        >
                            <option value="" disabled selected>Select mode of delivery</option>
                            <option value="self-pickup">Self-pickup</option>
                            <option value="home-delivery">Home delivery</option>
                        </select>
                        {/* <label className="block text-gray-700">Mode of delivery</label> */}
                    </div>

                    <div className="login">
                        <button type="submit" >Log In</button>
                    </div>

                    <ul>
                        {users.map(user => <li key={user._id}>{user.username},{user.gender}, {user.age}</li>)}
                    </ul>
                    <hr className="my-5" />
                    <div className="mt-5 text-center">
                        <button onClick={signInWithGoogle} type="submit" className="btn btn-primary">Google Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
