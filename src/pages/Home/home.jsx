import React, { useEffect, useState } from 'react'
import img1 from '../../Asset/Image/1st.webp'
import img2 from '../../Asset/Image/2nd.jpg'
import img3 from '../../Asset/Image/About.jpeg'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestore } from '../../config/firebase'
import Joker from '../../Asset/Image/jokar.webp'
import book1 from '../../Asset/Image/Moon Dance.jpg'
import { Link } from 'react-router-dom'


export default function Index() {
  const [state, setState] = useState([])
  const [filterState, setFilterState] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {

    const querySnapshot = await getDocs(collection(firestore, "books"));
    const array = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      array.push(data)
      setState(array)
      setFilterState(array)
    });
  }
  const filterData = async (name, value) => {

    const q = query(collection(firestore, "books"), where(name, "==", value));

    const querySnapshot = await getDocs(q);
    const array = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      array.push(data)
    });
    setFilterState(array)
  }

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col">

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-wallpapers-hd-backgroud-1080p.jpg" style={{height:"80vh",width:"100%"}}className="d-block  m-auto" />
                </div>
                <div className="carousel-item">
                  <img src="https://wallup.net/wp-content/uploads/2018/03/23/566310-sky-landscape-road-sunset.jpg" style={{height:"80vh",width:"100%"}} className="d-block w-100 m-auto" />
                </div>
                <div className="carousel-item p-absolute">
                  <img src="https://wallpapercave.com/wp/wp11309763.jpg" style={{height:"80vh",width:"100%"}} className="d-block w-100 m-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 " >
          <h1 className='text-center mb-5'> Best Selling Books Ever</h1>
          {state.map((book, i) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 col-sm-m-auto" style={{display:"flex" ,alignItems:"center",justifyContent: "center"}}  >
                <div className="card my-1" style={{ width: "240px" }} key={i}  >
                  <div >
                    <Link to={`/bookdetail/:${book.id}`}> <img className="card-img-top" style={{ height: "300px" }} src={book.img} /></Link>
                    <div className="card-body">
                      <h5 className="card-title">{book.name}</h5>
                      <p className="card-text">{book.writer}</p>
                      <br />
                      <h5 className='text-danger ' style={{ float: "right" }}>{book.price}</h5>
                    </div></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="row mb-5">
          <div className="col-12 col-lg-9">
            <h3 className=' mb-5 d-inline'>Featured This Week</h3>
            <div className="btn btn-danger" style={{ float: "right" }}><strong>View All</strong></div>
            <br /> <br />
            <div className=" p-5 my-3" style={{ background: "#e02828" }}>
              <div className="row">
                <div className="col-12 col-md-6">
                  <img src={book1} alt="" style={{width:"100%"}} />
                </div>
                <div className="col-12 col-md-6 mt-5 text-white">
                  <h1>Red Planet</h1>
                  <p>By: <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; J.R RAIN </p>
                  <br /><br />
                  <h3>Price: $90.00 </h3> <br />
                  <h4>Rating : <small>⭐⭐⭐</small> </h4>
                  <Link to={`/bookdetail/:md004`}>
                    <div className="btn btn-light  shadow text-dark rounded-5 my-3">View Detail</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img src={Joker} alt="" style={{width:"100%"}} />
          </div>
        </div>

        <div className="row mb-5">
          <div className='mb-5'>
            <h1 className='text-danger d-inline'>Latest Published items</h1>
            <div style={{ float: "right", display: "inline" }}>
              <div className="btn btn-danger rounded-5 border px-3 m-1 btn-lg" onClick={getData} >All</div>
              <div className="btn btn-danger rounded-5 border px-3 m-1 btn-lg" onClick={() => filterData("type", "horror")}>Horror</div>
              <div className="btn btn-danger rounded-5 border px-3 m-1 btn-lg" onClick={() => filterData("type", "thriller")}>Thriller</div>
              <div className="btn btn-danger rounded-5 border px-3 m-1 btn-lg" onClick={() => filterData("type", "science fiction")}>Science Fiction</div>
              <div className="btn btn-danger rounded-5 border px-3 m-1 btn-lg" onClick={() => filterData("type", "history")}>History</div>
              <div className="btn btn-danger rounded-5 border px-3 m-1 btn-lg" onClick={() => filterData("type", "lovely")}>Lovely</div>
            </div>
          </div>
          {filterState.map((book, i) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 col-sm-m-auto " style={{display:"flex" ,alignItems:"center",justifyContent: "center"}} >
                <div className="card my-1" style={{ width: "240px" }} key={i}  >
                  <div>
                    <Link to={`/bookdetail/:${book.id}`}> <img className="card-img-top" style={{ height: "300px" }} src={book.img} /></Link>
                    <div className="card-body">
                      <h5 className="card-title">{book.name}</h5>
                      <p className="card-text">{book.writer}</p>
                      <br />
                      <h5 className='text-danger ' style={{ float: "right" }}>{book.price}</h5>
                    </div></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="row">
          <div className="col-12 col-md-6 p-5 my-1" id='Gradient'>
            <div className="row">
              <div className="col-12 col-md-6 text-center">
                <h1 className='text-light '>The History  Of Phipino</h1>
              </div>
              <div className="col-12 col-md-6 text-center ">
                <div className="btn btn-danger  px-3 rounded-5 shadow mt-5 ">Viewdetail
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-5 my-1" id='Gradient'>
            <div className="row">
              <div className="col-12 col-md-6 text-center">
                <h1 className='text-light '>Wilma Mumduya</h1>
              </div>
              <div className="col-12 col-md-6 text-center ">
                <div className="btn btn-danger  px-3 rounded-5 shadow mt-5 ">Viewdetail
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-info mb-5 mt-4" id='gradient'>
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
