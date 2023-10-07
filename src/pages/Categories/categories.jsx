import React, { useEffect, useState } from 'react'
import About from '../../Asset/Image/antique-book-book-bindings-1005324.jpg'
import { firestore } from '../../config/firebase'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { Link } from 'react-router-dom'


export default function Index() {
  const [state, setState] = useState([])

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
    });
    console.log('state', state)
  }
  const filterData = async (name, value) => {

    const q = query(collection(firestore, "books"), where(name, "==", value));
    const querySnapshot = await getDocs(q);
    const array = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      array.push(data)
    });
    setState(array)
  }

  return (
    <>
      <div className="container" style={{ fontFamily: "-moz-initial" }}>
        <div className="row" >
          <div className="col" >
            <img src={About} alt="" style={{ width: "100%", height: "230px", objectFit: "cover", opacity: "0.7" }} />
            <span style={{ position: "relative", bottom: "50%", left: "45%", color: "black" }} >  <h1 className='d-inline'><strong>Categories</strong></h1></span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-3 border bg-light mb-4">
            <div className='mb-3'>
              <h3>Filter By Genres</h3>
              <button className='border-0 bg-light' onClick={() => filterData("type", "history")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>History</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("type", "horror")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Horror</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("type", "lovely")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Love Stories</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("type", "science fiction")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Science Fiction</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("type", "thriller")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Thriller</span></button><br />
            </div>
           
            <hr />
            <div className='my-4'>
               <h3>Filter By Rating</h3>
               <div className="btn btn-danger rounded-5 border m-1 shadow" onClick={() => filterData("rating", "5star")}>⭐⭐⭐⭐⭐</div><br />
               <div className="btn btn-danger rounded-5 border m-1 shadow" onClick={() => filterData("rating", "4star")}>⭐⭐⭐⭐</div><br />
               <div className="btn btn-danger rounded-5 border m-1 shadow" onClick={() => filterData("rating", "3star")}>⭐⭐⭐</div><br />
               <div className="btn btn-danger rounded-5 border m-1 shadow" onClick={() => filterData("rating", "2star")}>⭐⭐</div><br />
               <div className="btn btn-danger rounded-5 border m-1 shadow" onClick={() => filterData("rating", "1star")}>⭐</div>
            </div>
            <hr />
            <div className='my-3'>
              <h3>Filter By Auther Name</h3>
              <button className='border-0 bg-light' onClick={() => filterData("writer", "Robert A.Heinlein")} >
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Robert A.Heinlein</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("writer", "James Hilton")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>James Hilton</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("writer", "JR Rain")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>JR Rain</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("writer", "Megan Campisi")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Megan Campisi</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("writer", "Alex Sarris")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Alex Sarris</span></button><br />
              <button className='border-0 bg-light' onClick={() => filterData("writer", "Marcy Dermansky")}>
                <input type="radio" name='filter' /><span className='m-2 fw-bold '>Marcy Dermansky </span></button>
            </div>
          </div>
          <div className="col-12 col-md-8">

            <div className="row">
              {state.map((book, i) => {
                return (
                  <div className="col-12 col-md-6">
                    <div className="card my-3 shadow" key={i}  >
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
          </div>
        </div>
      </div >
    </ >
  )
}

