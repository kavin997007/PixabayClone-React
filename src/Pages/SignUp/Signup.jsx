import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./Signup.css";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
    e.preventDefault();

    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        console.log("User Created:", user.user);

        localStorage.setItem(
            "accessToken",
            user.user.accessToken
        );

        navigate('/login');

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

    return (
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <h1>SignUp Page</h1>

                <input
                    type="email"
                    value={email}
                    placeholder='Enter Your Email Id'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    value={password}
                    placeholder='Enter Your Password'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Sign Up</button>
                
                <p>
                    Already have an account?
                    <Link to='/login'> Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;