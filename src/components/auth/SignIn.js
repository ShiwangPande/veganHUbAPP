import { signInWithEmailAndPassword } from "firebase/auth";
import { React, useEffect, useState } from 'react';
import { auth } from "../../firebase";
import "./Signup.css";
import 'firebase/auth';
import firebase from 'firebase/app';
import { signInWithGoogle, signOutwithGoogle } from '../../context/AuthContext';
import app from "../../firebase";
import GoogleButton from 'react-google-button';
import { Navigate } from "react-router-dom";
// import { useAuth } from '../context/AuthContext'
const SignIn = () => {
    const [form, setForm] = useState({});
    const [users, setUsers] = useState([]);

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const navigate = Navigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://veganhubserver.onrender.com/demo', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            navigate.push("/");
        }
    }

    const getUsers = async () => {
        const response = await fetch('https://veganhubserver.onrender.com/demo', {
            method: 'GET',
        })
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div className="sign-in-container text-white  " >
            <div class="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div class="user-box">
                        <input type="email"
                            placeholder="Enter your email" required="" name="username"
                            onChange={handleForm} />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password"
                            placeholder="Enter your password"
                            name="password"
                            onChange={handleForm} required="" />
                        <label>Password</label>
                    </div>
                    <div class="user-box">
                        <input type="number"
                            placeholder="Enter your age"
                            name="age"
                            onChange={handleForm} required="" />
                        <label>Age</label>
                    </div>
                    <div class="user-box">
                        <select
                            name="gender"
                            onChange={handleForm} required="" />
                        <label>Gender</label>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </div>
                    <div class="user-box">
                        <select
                            name="delivery"
                            onChange={handleForm} required="" />
                        <label>Mode of delivery</label>
                        <option>self-pick up</option>
                        <option>home delivery</option>
                    </div>
                    <div className="login" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="submit" >Log In</button>
                    </div>
                    <ul>
                        {users.map(user => <li key={user._id}>{user.username},{user.password}</li>)}
                    </ul>
                    <hr className="my-5" />

                    <div>
                        Don't have an account? <a href="/register" className="text-white hover:text-blue-600">Sign Up</a>

                    </div>

                    <div className="mt-5 text-center ">
                        <button onClick={signInWithGoogle} type="submit" class="btn btn-primary"> <GoogleButton /> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;