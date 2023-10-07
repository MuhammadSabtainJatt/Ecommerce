import React, { useContext, useEffect, useState } from 'react'
import About from '../../Asset/Image/antique-book-book-bindings-1005324.jpg'
import book1 from '../../Asset/Image/Book1.jpg'
import book2 from '../../Asset/Image/Moon Dance.jpg'
import {useCartcontext} from '../../context/Cartcontext'


export default function Index() {
    
    const { shoppingCart, dispatch, totalPrice, totalQty } = useCartcontext();
    console.log(shoppingCart, dispatch, totalPrice, totalQty )


    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)

    const [count1, setCount1] = useState(0)
    const [total1, setTotal1] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
        setTotal((count + 1) * 360)
    }
    const handleDecrement = () => {
        count > 0 && setCount(count - 1)
        count > 0 && setTotal(total - 360)

    }

    const handleIncrement1 = () => {
        setCount1(count1 + 1)
        setTotal1((count1 + 1) * 200)
    }
    const handleDecrement1 = () => {
        count1 > 0 && setCount1(count1 - 1)
        count1 > 0 && setTotal1(total1 - 200)

    }
    return (
        <div>
            <div className="container" style={{ fontFamily: "-moz-initial" }}>
                <div className="row" >
                    <div className="col" >
                        <img src={About} alt="" style={{ width: "100%", height: "230px", objectFit: "cover", opacity: "0.7" }} />
                        <span style={{ position: "relative", bottom: "50%", left: "45%", color: "black" }} >  <h1 className='d-inline'><strong>Cart</strong></h1></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table ">
                                <tr  >
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="row ">
                                            <div className="col-12 col-md-6">
                                                <img src={book1} width={150} className='me-5 my-4' />
                                            </div>
                                            <div className="col-12 col-md-6 m-auto ">
                                                THE RACE OF DRAGONS
                                            </div>
                                        </div>
                                    </th>
                                    <td>$360.00</td>
                                    <td>
                                        <div className=" w-100">
                                            <button className="btn" onClick={handleIncrement}><h4>+</h4></button>
                                            <p className="d-inline mx-2">{count}</p>
                                            <button className="btn" onClick={handleDecrement}><h4>-</h4></button>
                                        </div>
                                    </td>
                                    <td>$ {total}.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="row ">
                                            <div className="col-12 col-md-6">
                                                <img src={book2} width={150} className='me-5 my-4' />
                                            </div>
                                            <div className="col-12 col-md-6 m-auto ">
                                                Moon Dance By J.R RAIN
                                            </div>
                                        </div>
                                    </th>
                                    <td>$200.00</td>
                                    <td>
                                        <div className=" w-100">
                                            <button className="btn" onClick={handleIncrement1}><h4>+</h4></button>
                                            <p className="d-inline mx-2">{count1}</p>
                                            <button className="btn" onClick={handleDecrement1}><h4>-</h4></button>
                                        </div>
                                    </td>
                                    <td>$ {total1}.00</td>
                                </tr>
                            </table>
                        </div>
                        <hr />
                        <div className="row my-2">
                            <div className="col-12 col-md-6">
                                <div className="btn rounded-5 m-1" style={{ background: "#e02828", color: "white" }}>Update Cart
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="btn rounded-5 m-1" style={{ background: "#e02828", color: "white" }}>Close Coupon
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row my-3">
                            <div className="col " style={{ textAlign: "end" }}>
                                <h4 className='d-inline mx-4' >Subtotal = ${total + total1}.00</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col " style={{ textAlign: "right", justifyContent: "right" }}>
                                <h4 className='mb-3'>
                                    <strong>Shipping Detail</strong></h4>
                                <p className='m-1'>Flat Rate :$5.00 <input type="radio" name='flatrate' /></p>
                                <p className='m-1'>Free Shipping <input type="radio" name='flatrate' /></p>
                                <p className='m-1'>Flat Rate :$10.00 <input type="radio" name='flatrate' /></p>
                                <p className='m-1'  > Local Delivery :$2.00 <input type="radio" name='flatrate' /></p>
                                <p >
                                    <select className=" rounded-5 shadow  form-select-lg mb-3 px-5" aria-label="Default select example" style={{ maxWidth: "400px", marginLeft: "10px" }}>
                                        <option selected>Country</option>
                                        <option value="pakistan">Pakisten</option>
                                        <option value="india">India</option>
                                        <option value="other">Other</option>
                                    </select>
                                </p>
                                <select className=" rounded-5  shadow form-select-lg mb-3 px-5" aria-label="Default select example" style={{ maxWidth: "250px", }}>
                                    <option selected>State</option>
                                    <option value="pakistan">Pakisten</option>
                                    <option value="india">India</option>
                                    <option value="other">Other</option>
                                </select><br />
                                <input type="text" className='w-25 m-2 rounded-1 shadow border mb-3' style={{ height: "40px" }} placeholder='Postcode/Zipcode' /> <br />
                                <div className="btn btn-lg rounded-5 m-1" style={{ background: "#e02828", color: "white" }}>Update Detail
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-5">
                            <div className="col-12 col-md-6">
                                <div className="btn btn-lg rounded-5 m-1" style={{ background: "#e02828", color: "white" }}>Continue Shoping
                                </div>
                                <div className="btn btn-lg rounded-5 m-1" style={{ background: "#e02828", color: "white" }}>Proceed to Cheakout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
