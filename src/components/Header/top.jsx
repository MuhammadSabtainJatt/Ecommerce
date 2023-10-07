import React from 'react'
import Image from '../../Asset/Image/logo.png.webp'
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthcontext } from '../../context/Authcontext';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { message } from 'antd';

export default function Top() {
  const Navigate =useNavigate()
  const {isAuth,dispatch}=useAuthcontext()
  const handleSignout =()=>{
    
    signOut(auth)
      .then(() => {
        message.success('Signout successful');
        dispatch({ type: 'SET_LOGGED_OUT' });
      })
      .catch((err) => {
        message.error('Signout not successful');
      });
  }
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Image} />
          </div>
          <div className="input-group input my-2">
            <input type="text" className="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-danger " type="button"><SearchOutlined /></button>
            </div>
          </div>
          <div  >
            <Link to="/faq" className='ms-5 FAQ'>FAQ</Link>
          </div>
          <div >
            <Link to="/trackorder" className='ms-3 trackOrder' >Track Order</Link>
          </div>
          <div className="cart ms-3 ">
            <span className="cart-icon">
              <ShoppingCartOutlined />
            </span>
            <span className="cart-number">01</span>
          </div>
          <div className="login ms-3 ">
            {isAuth?<Link ><button className="login-btn" onClick={handleSignout} >logout</button></Link>:<Link to='/auth/login'><button className="login-btn" >Login</button></Link>}
          </div>
        </div>
      </nav>
    </>
  )
}
