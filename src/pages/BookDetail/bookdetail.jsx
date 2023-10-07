import React, { useContext, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../../config/firebase'
import { useCartcontext } from '../../context/Cartcontext'
import { message } from 'antd'




export default function Index() {
  const [state, setState] = useState([])
  const Param = useParams()
  const addCart=()=> {
    message.success("Book is Added into Cart")
  }

  const getData = async () => {
    const q = query(collection(firestore, "books"), where("id", "==", Param.id.slice(1)));
    const querySnapshot = await getDocs(q);
    let array = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      array.push(data)
    });
    setState(array)
  }
  useEffect(() => {
    getData()
  }, [])

  return (<>
    <div className="container" >
      <div className="row mb-3   p-5" style={{ background: "#e02828" }}>
        {state.map((book, i) => {
          return (<>
            <div className="col-12 col-md-4">
              <img src={book.img} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-12 col-md-8 mt-5 text-white">
              <h1>{book.name}</h1>
              <p>By {book.writer}</p>
              <br /><br />
              <h1>{book.price}</h1><br />
              <h4>Rating : {book.rating}</h4>
              <div className="btn btn-light shadow btn-lg rounded-5 my-3" onClick={addCart}><strong>Add To Cart</strong></div>
            </div></>
          )
        })}
      </div>
    </div>
    <div className="container">
      <div className="row   p-5">
        <div className="col">

          <div className='btn btn-lg btn-success border rounded-5 mx-2 buttons' >Description</div>
          <div className='btn btn-lg btn-success border rounded-5 mx-2 buttons' >Author</div>
          <div className='btn btn-lg btn-success border rounded-5 mx-2 buttons' >Comments</div>
          <div className='btn btn-lg shadow btn-success border rounded-5 mx-2 buttons' >Review</div>
          <br /><br />
          <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

            It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</p>

        </div>
      </div>
      <div className="row bg-info mb-5" id='gradient' >
        <div className="col text-center my-5">
          <h1 className='mb-3'>Join Newsletter</h1>
          <p>Lorem started its journey with cast iron (CI) products in 1980. The initial main <br /> objective was to ensure pure water and affordable irrigation.</p>
          <div className='my-3'>
            <input type="email" name="email" placeholder='Email Address' className=' px-3 py-4 mb-3 rounded-5' style={{ height: "40px", border: "none" }} />
            <div className="btn btn-danger py-2 m-2 rounded-5">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
