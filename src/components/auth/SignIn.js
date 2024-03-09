import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import "./Signup.css";
import 'firebase/auth';
import firebase from 'firebase/app';
import { signInWithGoogle, signOutwithGoogle } from '../../context/AuthContext';
import app from "../../firebase";
import GoogleButton from 'react-google-button';
// import { useAuth } from '../context/AuthContext'
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await app.auth().signInWithEmailAndPassword(email, password);
            // User successfully logged in
            console.log('User logged in successfully');
        } catch (error) {
            setError(error.message);
        }
    };
    // const { currentUser } = useAuth();
    return (
        <div className="sign-in-container text-white  " >
            <div class="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div class="user-box">
                        <input type="email"
                            placeholder="Enter your email" required="" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required="" />
                        <label>Password</label>
                    </div>
                    <div className="login" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="submit" >Log In</button>
                    </div>
                    {error && <p>{error}</p>}
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