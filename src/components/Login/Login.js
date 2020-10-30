import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = data => {
        const { name, email, password } = data;
        if (newUser) {
            createUserWithEmailAndPassword(name, email, password)
                .then(res => {
                    setNewUser({ ...newUser, ...res });
                })
                .catch(err => console.log(err));
        }
        else {
            signInWithEmailAndPassword(email, password)
                .then(res => {
                    setLoggedInUser({ ...loggedInUser, ...res });
                    history.replace(from);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="login">
            <img className="login-logo" src="https://i.ibb.co/0yjGfSD/logo2.png" alt="logo2" border="0" />
            { newUser.success && <p>User account created successfully</p>}
            { loggedInUser.success && <p>User Logged In successfully</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    newUser &&
                    <>
                        <input type="text"
                            name="name" placeholder="Name"
                            ref={register({ required: true, maxlength: 80 })}
                        />
                        {errors.name && <p style={{ color: 'red', }} className="mx-5">This field is required!</p>}
                    </>
                }
                <input type="text"
                    name="email" placeholder="Email"
                    ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/ })}
                />
                {
                    errors.email &&
                    <p style={{ color: 'red', }} className="mx-5">
                        This field is required! and must match with email format
                    </p>
                }
                <input type="password"
                    name="password" placeholder="Password"
                    ref={register({ required: true, pattern: /^(?=.*[a-z]){3,}(?=.*[A-Z]){2,}(?=.*[0-9]){2,}(?=.*[!@#$%^&*()--__+.]){1,}.{8,}$/ })}
                />
                {
                    errors.password &&
                    <p style={{ color: 'red', }} className="mx-5">
                        Password must contain one uppercase, three lowercase letter, one special character, two numbers and minimum length 8
                    </p>
                }
                {
                    newUser &&
                    <>
                        <input type="password"
                            name="confirmPassword" placeholder="Confirm Password"
                            ref={register({ required: true, validate: value => value === password.current || "The passwords do not match" })}
                        />
                        {
                            errors.confirmPassword &&
                            <p style={{ color: 'red', }} className="mx-5">
                                {errors.confirmPassword.message}
                            </p>
                        }
                    </>
                }
                <input className="login-submit-btn" type="submit" value={newUser ? "Sign up" : "Sign in"} />
            </form>
            <p onClick={() => setNewUser(!newUser)} style={{ color: 'red' }}>
                {newUser ? 'Already have an account?' : 'Create a new account'}
            </p>
        </div>
    );
};

export default Login;