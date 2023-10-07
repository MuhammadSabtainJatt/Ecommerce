import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthcontext } from '../context/Authcontext'


export default function PrivateRoute({Component}) {
    const {isAuth} =useAuthcontext()
    const Navigate=useNavigate()
    const Location=useLocation()
    if(!isAuth){
        <Navigate to="/auth/login" state={{ from:Location.pathname }} replace/>
    }
    return (
        <Component />
  )
}
