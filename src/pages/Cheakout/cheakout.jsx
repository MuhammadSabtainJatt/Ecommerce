import React, { useEffect, useState } from 'react'
import About from '../../Asset/Image/antique-book-book-bindings-1005324.jpg'
import { Link } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../config/firebase'
import { message } from 'antd'


const initialState = { firstname: "", lastname: "", companyname: "", phonenumber: "", email: "", stat: "", line01: "", line02: "", line03: "", district: "", zipcode: "" ,ordernotes:" "}


export default function Index() {
    const [state, setState] = useState(initialState)
    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async() => {
        const { firstname, lastname, email, companyname, phonenumber, stat, line01, line02, line03, district, zipcode,ordernotes } = state
        const fullMessage = { firstname, lastname, email, companyname, phonenumber, stat, line01, line02, line03, district, zipcode,ordernotes,
        id:Math.random().toString(36).slice(2)
     }
        
        try {
            await setDoc(doc(firestore, "cheakout", fullMessage.id), fullMessage);
            message.success("Successfull")
            setState(initialState)
        } catch (err) {
            message.error("Not Successfull")
            console.error(err)

        }
    }

    return (
        <>
            <div className="container" style={{ fontFamily: "-moz-initial" }}>
                <div className="row" >
                    <div className="col" >
                        <img src={About} alt="" style={{ width: "100%", height: "230px", objectFit: "cover", opacity: "0.7" }} />
                        <span style={{ position: "relative", bottom: "50%", left: "45%", color: "black" }} >  <h1 className='d-inline'><strong>Cheakout</strong></h1></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                        <h6 className='bg-light p-2 my-2'>Have a coupon? <Link className='text-danger'  > Click here to enter your code</Link></h6>
                        <input type="text" placeholder='Enter Coupon Code' className='mx-4 my-2 w-75 p-2 border ' style={{ height: "40px" }} /> <br />
                        <div className="btn px-3 rounded-5 m-1" style={{ background: "#e02828", color: "white" }}>Apply Coupon
                        </div>
                    </div>
                </div>
                <div className="row my-4" >
                    <div className="col-12 col-md-8">
                        <h3>Billing Details</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <input type="text" name="firstname" value={state.firstname} placeholder='First Name' className='border px-3 mb-3 w-100' style={{ height: "40px" }} onChange={handleChange} />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" name="lastname" value={state.lastname} placeholder='Last Name' className='border px-3 mb-3 w-100' style={{ height: "40px" }} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" name="companyname" value={state.companyname} placeholder='Company Name' className='border px-3 mb-3 w-100' style={{ height: "40px" }} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <input type="number" name="phonenumber" value={state.number} placeholder='Phone Number' className='border px-3 mb-3 w-100' style={{ height: "40px" }} onChange={handleChange} />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="email" name="email" value={state.email} placeholder='Email Address' className='border px-3 mb-3 w-100' style={{ height: "40px" }} onChange={handleChange} />
                            </div>
                        </div>
                        <select className=" rounded-5 border form-select text-secondary mb-5" aria-label="Default select example" name='stat' value={state.stat} onChange={handleChange} >
                            <option selected>Select Country</option>
                            <option value="pakistan">Pakisten</option>
                            <option value="india">India</option>
                            <option value="otder">Otder</option>
                        </select>
                        <input type="text" value={state.line01} onChange={handleChange} name='line01' className=' w-100 rounded-1  border mb-3' style={{ height: "40px" }} placeholder='Address Line 01' />
                        <input type="text" value={state.line02} onChange={handleChange} name='line02' className=' w-100 rounded-1  border mb-3' style={{ height: "40px" }} placeholder='Address Line 02' />
                        <input type="text" value={state.line03} onChange={handleChange} name='line03' className=' w-100 rounded-1  border mb-3' style={{ height: "40px" }} placeholder='Address Line 03' />
                        <select name='district' value={state.district} onChange={handleChange} className=" rounded-5 border form-select text-secondary mb-5" aria-label="Default select example" >
                            <option selected>District</option>
                            <option value="pakistan">Agra</option>
                            <option value="pakistan">Bahawalpur</option>
                            <option value="pakistan">Delhi</option>
                            <option value="india">Faisalabad</option>
                            <option value="otder">Gilgit</option>
                            <option value="otder">Hadrebad</option>
                            <option value="otder">Islamabad</option>
                            <option value="otder">Karachi</option>
                            <option value="otder">Lahore</option>
                            <option value="otder">Multan</option>
                            <option value="otder">Nankanah</option>
                            <option value="otder">Narowal</option>
                            <option value="otder">Okara</option>
                            <option value="otder">Pashwar</option>
                            <option value="otder">Queta</option>
                            <option value="otder">Rawalpindi</option>
                            <option value="otder">Sailkot</option>
                        </select>
                        <input type="text" name='zipcode' value={state.zipcode} className=' w-100 rounded-1 border mb-4' style={{ height: "40px" }} placeholder='Postcode/ZIP' onChange={handleChange} />
                        <input type="checkbox" /><p className='d-inline mx-3 '>Create an account?</p>
                        <h5 className='mt-5 mb-3'>Shipping Details</h5>
                        <input type="checkbox" /><p className='d-inline mx-3 '>Ship to a different address?</p>
                    </div>
                    <div className="col-12 col-md-4 bg-light p-3 ">
                        <h5>Your Order</h5>
                        <hr />
                        <table className="table table-light w-100">
                            <thead>
                                <tr>
                                    <td scope="col">Product</td>
                                    <td scope="col"></td>
                                    <td scope="col">Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >Fresh Blackberry</td>
                                    <td>×02</td>
                                    <td>$720.00</td>
                                </tr>
                                <tr>
                                    <td >Fresh Tomatoes</td>
                                    <td>×02</td>
                                    <td>$720.00</td>
                                </tr>
                                <tr>
                                    <td >Fresh Brocoli</td>
                                    <td>×02</td>
                                    <td>$720.00</td>
                                </tr>
                                <tr>
                                    <td >SubTotal</td>
                                    <td></td>
                                    <td>$2160.00</td>
                                </tr>
                                <tr>
                                    <td > SHIPPING</td>
                                    <td></td>
                                    <td>Flat Rate :$50.00</td>
                                </tr>
                                <tr>
                                    <td > TOTAL</td>
                                    <td></td>
                                    <td>$2210.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="radio" name="" id="" className='mx-3' /><span> &nbsp;Cheak Payment</span>
                        <div className='m-3 p-3 bg-white'>
                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                        <input type="radio" name="" id="" className='mx-3' /><span> &nbsp;PAYPAL</span>
                        <div className='m-3 p-3 bg-white'>
                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                        <input type="checkbox" name="" id="" className='mx-3' /><span> &nbsp; I’ve read and accept the terms & conditions*</span>
                        <div className='text-center'>
                            <div className="btn px-3 mx-auto rounded-5 mt-3 w-75 " onClick={handleSubmit} style={{ background: "#e02828", color: "white" }}>Proceed To PAYPAL
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <textarea name="ordernotes" id="" rows="5" placeholder='Order Notes' className=' w-100 d-block  my-3'></textarea>
                    </div>
                    <div className="col-12 col-md-4"></div>

                </div >
            </div>
        </>
    )
}
