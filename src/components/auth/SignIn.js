import { React, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { signInWithGoogle } from '../../context/AuthContext';
import './Signup.css';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        age: '',
        gender: '',
        delivery: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://veganhubserver.onrender.com/submit-form', formData);
            alert('Form submitted successfully!');
            // Clear form data after submission if needed
            setFormData({
                email: '',
                password: '',
                age: '',
                gender: '',
                delivery: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }
    };



    return (
        <div className="sign-in-container">

            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box mb-4">
                        <input
                            type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"
                            className="bg-gray-200 rounded-md px-4 py-2 w-full" required
                        />
                        <label className="block text-gray-700">Username</label>
                    </div>

                    <div className="user-box mb-4">
                        <input
                            type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"
                            required
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        />
                        <label className="block text-gray-700">Password</label>
                    </div>

                    <div className="user-box mb-4">
                        <input
                            type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required
                            className="bg-gray-200 rounded-md px-4 py-2 w-full"
                        />
                        <label className="block text-gray-700">Age</label>
                    </div>

                    <label className="block text-[#03e9f4]">Gender</label>
                    <div className="user-box mb-4">
                        <select
                            name="gender" value={formData.gender} onChange={handleChange} required
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
                            name="delivery" value={formData.delivery} onChange={handleChange} required
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
