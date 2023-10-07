import React from 'react'
import Image from '../../Asset/Image/logo.png.webp'
import { Link } from 'react-router-dom'
import {FacebookFilled ,InstagramFilled,YoutubeFilled,LinkedinFilled} from '@ant-design/icons'

export default function footer() {
const year=new Date().getFullYear()
    return (
    <div style={{backgroundColor:"pink", lineHeight:'30px' }}>
    <div className="container py-3">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mt-3" >
                <img src={Image} alt="" className='mb-4' />
                <p>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                <a href="https://search.yahoo.com/search?fr=mcafee&type=E210US91215G0&p=facebook" target='blank'  style={{fontSize:"34px",color:"#e02828"}}><FacebookFilled  /></a>
                <a href="https://www.instagram.com/" target='blank'  style={{fontSize:"34px",color:"#e02828"}}><InstagramFilled /></a>
                <a href="https://www.linkedin.com/" target='blank'  style={{fontSize:"34px",color:"#e02828"}}><LinkedinFilled /></a>
                <a href="https://www.youtube.com/" target='blank'  style={{fontSize:"34px",color:"#e02828"   }}><YoutubeFilled /></a>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
                <h4  className='mb-4'>Book Categories</h4>
                <ul style={{listStyleType:"none"}}>
                    <li><Link to="" className='nav-link'>History</Link></li>
                    <li><Link to=""   className='nav-link'>Horror - Thriller</Link></li>
                    <li><Link to=""  className='nav-link'>Love Stories</Link></li>
                    <li><Link to=""  className='nav-link'>Science Fiction</Link></li>
                    <li><Link to=""  className='nav-link'>Business</Link></li>
                </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
                <h4  className='mb-4'> </h4>
                <ul  className='mt-5' style={{listStyleType:"none"}}>
                    <li><Link to="" className='nav-link'>Biography</Link></li>
                    <li><Link to="" className='nav-link'>Astrology</Link></li>
                    <li><Link to="" className='nav-link'>Digital Marketing </Link></li>
                    <li><Link to="" className='nav-link'>Software Development</Link></li>
                    <li><Link to="" className='nav-link'>Ecommerce</Link></li>
                </ul>           
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
                <h4  className='mb-4'>Site Map</h4>
                <ul style={{listStyleType:"none"}}>
                    <li><Link to="" className='nav-link'>Home</Link></li>
                    <li><Link to="" className='nav-link'>About Us </Link></li>
                    <li><Link to="" className='nav-link'>FAQs</Link></li>
                    <li><Link to="" className='nav-link'>Cart</Link></li>
                    <li><Link to=""  className='nav-link'>Contact</Link></li>
                </ul>
            </div>
            
        </div>
        <p className='text-center mt-5' style={{fontFamily:"monospace",fontSize:"20px"}}>Copyright ©{year} All rights reserved | This Website is made by Muhammad Sabtain</p>
    </div>
    </div>
  )
}
