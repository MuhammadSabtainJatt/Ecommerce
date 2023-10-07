import React from 'react'
import About from '../../Asset/Image/abcd.jpg'

export default function about() {
    return (
        <div>
            <div className="container" style={{ fontFamily: "-moz-initial" }}>
                <div className="row">
                    <div className="col" >
                        <img src={About} alt="" style={{ width: "100%", height: "230px", objectFit: "cover" }} />
                        <span style={{ position: "relative", bottom: "50%", left: "25%", color: "white" }} >  <h1 className='d-inline'>About</h1></span>
                    </div>


                </div>
                <div className="row px-5">

                    <div className="col " style={{ lineHeight: "25px" }}>
                        <h1 className='mb-5'><strong>Our Story</strong></h1>
                        <p style={{ color: "gray" }} className='mt-3'>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband andIt is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</p>
                    </div>
                </div>
                <div className="row px-5 mb-5">
                    <div className="col " style={{ lineHeight: "25px" }}>
                        <h1 className=' mt-3 mb-5'><strong>Our Goal</strong></h1>
                        <p style={{ color: "gray" }} className='mt-3'>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
