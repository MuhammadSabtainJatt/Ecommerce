import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthcontext } from '../../context/Authcontext'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { message } from 'antd'


export default function Bottom() {
  const {isAuth,dispatch}=useAuthcontext()
  
  const handleLogout = () => {
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><strong>Home</strong></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/categories"><strong>Categories</strong></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about"><strong>About</strong></Link>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
                <Link className="nav-link"><strong>Pages</strong></Link>
                <div className="dropdown-content">
                  {isAuth?<Link onClick={handleLogout}>Logout</Link>:<Link to="/auth/login">Login</Link>}
                  
                  <Link to="/cart">Cart</Link>
                  <Link to="/cheakout">Cheakout</Link>
                  <Link to="/bookdetail">Book Detail</Link>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact"><strong>Contact</strong></Link>
            </li>
          </ul>
        </div>
      </nav >
    </>
  )
}
