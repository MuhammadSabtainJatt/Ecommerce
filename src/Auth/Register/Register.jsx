import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth, firestore } from '../../config/firebase';
import { message } from 'antd';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

const initialState = { email: "", password: "", fullname: "" }

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [state, setState] = useState(initialState)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        setState((state) => ({ ...state, [e.target.name]: e.target.value }))
    }
    const handleRegister = (e) => {
        e.preventDefault()
        const { email, password, fullname } = state
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                createUserProfile(user)
                message.success("You are Register successfully")
                setState(initialState)
            })
            .catch((err) => {
                console.error(err)
                message.error("You are Not Register")
            });

    }
    const createUserProfile = async (user) => {
        const { fullname } = state
        const { email, uid} = user
        const users = {
            fullname, email,
            dateCreated: serverTimestamp(),
            status: "active",
            role: "customer"
        }
        try {
            await setDoc(doc(firestore, "users", uid), users);
            message.success("user id Added")
        } catch (err) {
            console.error(err)
            message.error("something went wrong while adding User")
        }


    }

    return (
        <div id='body'>

            <div className="login-container">
                <h1 className='text-center text-danger fw-bold my-3   '>Register</h1>
                <div className="input-container">
                    <label htmlFor="email">FullName<span style={{ color: "#e02828" }}><strong>*</strong></span> :</label>
                    <input type="text" id="fullName" value={state.fullname} name="fullname" placeholder="Enter your Full Name" onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email<span style={{ color: "#e02828" }}><strong>*</strong></span> :</label>
                    <input type="email" id="email" name="email" value={state.email} placeholder="Enter your email" onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password<span style={{ color: "#e02828" }}><strong>*</strong></span> :</label>
                    <input type={passwordVisible ? 'text' : 'password'} id="password" value={state.password} name="password" placeholder="Enter your password" onChange={handleChange} />
                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                        <div className='mt-4'>{passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}</div>
                    </span>
                </div>
                <div className="text-center">
                    <button className="login-button " onClick={handleRegister}>Register</button></div>
                <div className="forgot-password">
                    Already have an account?
                    <Link href="#" className="forgot-password-link mt-3" to="/auth/login"> Login </Link> hear
                </div>
            </div>
        </div>
    );
}

export default Register;
