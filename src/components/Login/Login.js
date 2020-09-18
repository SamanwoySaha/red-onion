import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div  className="login">
            <img className="login-logo" src="https://i.ibb.co/0yjGfSD/logo2.png" alt="logo2" border="0" />
            <form onSubmit={handleSubmit}>
                {newUser && <input type="text" name="name" placeholder="Name" />}
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                {newUser && <input type="text" name="confirm-password" placeholder="Confirm Password" />}
                <input className="login-submit-btn" type="submit" value={newUser ? "Sign up" : "Sign in"}/>
            </form>
            <p onClick={() => setNewUser(!newUser)} style={{color: 'red'}}>
                {newUser ? 'Already have an account?' : 'Create a new account'}
            </p>
        </div>
    );
};

export default Login;