import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
    e.preventDefault();

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        localStorage.setItem(
            "accessToken",
            userCredential.user.accessToken
        );

        navigate('/home');

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Login Page</h1>

                <input
                    type="email"
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    value={password}
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                <p>
                    Don't Have an Account?
                    <Link to="/"> Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;