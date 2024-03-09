import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// Use compat version for Firebase v9+
import { auth } from "../../firebase"; // Import Firebase auth instance from your firebase.js file
import React, { useState } from "react";
import './Signup.css'
import { Link } from "react-router-dom";
import { signInWithGoogle, signOutwithGoogle } from '../../context/AuthContext';
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password); // Use auth instance from firebase.js
            // User account created successfully
            console.log('User account created successfully');
            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="sign-in-container  text-white" >
            <div className="login-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>
                    <div className="login" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="submit">Sign Up </button>
                    </div>
                </form>
                <div className="mt-5 text-center">
                    <button onClick={signInWithGoogle} className="btn btn-primary"> <GoogleButton /> </button>
                </div>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default SignUp;
