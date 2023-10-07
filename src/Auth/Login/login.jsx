import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { message } from 'antd';

const initialState = { email: "", password: "" }

function Login() {
  const Navigate=useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [state, setState] = useState(initialState)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }))
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const { email, password } = state
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        message.success("You Are successfully Login")
        const user = userCredential.user;
        setState(initialState)
      })
      .catch((err) => {
        console.error(err)
        message.error("Something went wrong while Login")
      });
      

  }

  return (
    <div id='body'>

      <div className="login-container">
        <h1 className='text-center text-danger fw-bold'>Login</h1>
        <div className="input-container">
          <label htmlFor="email">Email<span style={{ color: "#e02828" }}><strong>*</strong></span> :</label>
          <input type="email" value={state.email} id="email" name="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password<span style={{ color: "#e02828" }}><strong>*</strong></span> :</label>
          <input type={passwordVisible ? 'text' : 'password'} value={state.password} id="password" name="password" placeholder="Enter your password" onChange={handleChange} />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            <div className='mt-4'>{passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}</div>
          </span>
        </div>
        <div className="text-center">
          <button className="login-button " onClick={handleLogin}>Login</button></div>
        <div className="forgot-password">
          Don’t have an account?
          <Link href="#" className="forgot-password-link mt-3" to="/auth/register"> Sign Up </Link> here
        </div>
      </div>
    </div>
  );
}

export default Login;
