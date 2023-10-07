import React, { useState } from 'react'
import About from '../../Asset/Image/abcd.jpg'
import { message } from 'antd';
import { HomeOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firestore } from '../../config/firebase'

const initialState = { massage: "", name: "", email: "", subject: "" }

export default function Index() {
    const [state, setState] = useState(initialState)


    const handleChange = (e) => {
        setState((state) => ({ ...state, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async () => {
        const { massage, name, email, subject } = state
        const Message = {
            massage, name, email, subject,
            dateCreated: serverTimestamp(),
            id: Math.random().toString(36).slice(2)
        }
        if (massage.length < 5) {
            return message.error("Please Type Message ")
        }
        if (name.length < 3) {
            return message.error("Please Enter Your Full Name ")
        }
        if (!email) {
            return message.error("Please Enter Your Email ")
        }
        if (!subject) {
            return message.error("Please Enter Your Subject ")
        }
        try {
            await setDoc(doc(firestore, "message", Message.id), Message);
            message.success("Message Send Successfully")
            setState(initialState)
        } catch (err) {
            message.error("something went Wrong while Sent Message")
            console.error(err)

        }

    }
    return (
        <div>
            <div className="container" style={{ fontFamily: "-moz-initial" }}>
                <div className="row" >
                    <div className="col" >
                        <img src={About} alt="" style={{ width: "100%", height: "230px", objectFit: "cover" }} />
                        <span style={{ position: "relative", bottom: "50%", left: "25%", color: "white" }} >  <h1 className='d-inline'>Contact</h1></span>
                    </div>
                </div>
                <div className="row  mt-5">
                    <div className="col" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046328117!2d72.92448740259354!3d31.423759041229868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694687667220!5m2!1sen!2s" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="row mb-5">
                    <h3 className='my-5'>Get in Touch</h3>
                    <div className="col-12 col-lg-8 mb-4">
                        <div className="row my-1">
                            <div className="col">
                                <textarea name="massage" value={state.massage} id="message" style={{ width: "100%" }} rows="3" placeholder='Enter Message' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-md-6 my-2">
                                <input type="text" name="name" id="name" placeholder='Enter Your Name' value={state.name} style={{ width: "100%" }} onChange={handleChange} />
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <input type="email" name="email" id="email" value={state.email} placeholder='Enter Email' style={{ width: "100%" }} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mt-3 mb-4">
                            <div className="col">
                                <input type="text" name="subject" id="subject" value={state.subject} placeholder='Enter Subject' style={{ width: "100%" }} onChange={handleChange} />
                            </div>
                        </div>
                        <button className='btn btn-outline-danger p-2 px-4 ' onClick={handleSubmit}>Send</button>
                    </div>

                    <div className="col-12 col-md-4 px-5" style={{ fontSize: "25px", color: "black" }}>
                        <div className='row '>
                            <div className="col-2 ">
                                <HomeOutlined />
                            </div>
                            <div className='col-10'>
                                <a href="https://maps.app.goo.gl/aeqQaTBfvdwWLTHr9" rel='noopener noreferrer' style={{ color: "black", textDecoration: "none" }} target='blank'>
                                    Chak # 67jb sadhar Faisalabad
                                </a>
                            </div>
                        </div>
                        <div className='row' >
                            <div className="col-2">
                                <MobileOutlined />
                            </div>
                            <div className='col-10'>
                                <a href="https://wa.me/03047191103" target="_blank" style={{ color: "black", textDecoration: "none" }} rel="noopener noreferrer">0304-7191103 <br /></a></div>
                        </div>
                        <div className='row' >
                            <div className="col-2">
                                <MailOutlined />
                            </div>
                            <div className='col-10' >
                                <a href="mailto:subtainjutt26@gmail.com" style={{color:"black",textDecoration:"none"}}>subtainjutt26@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
