import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Categories from './Categories'
import Cart from './Cart'
import Cheakout from './Cheakout'
import BookDetail from './BookDetail'

// components 
import Header from '../components/Header'
import Footer from '../components/Footer'
import PrivateRoute from '../components/privateRoute'

export default function Index() {
  return (<>
    <Header />
    <Routes >
    <Route index element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/categories' element={<Categories />} />
    <Route path='/about' element={<About />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/cheakout' element={<PrivateRoute Component={Cheakout} />} />
    <Route path='/bookdetail/:id' element={<BookDetail />} />

    </Routes>
    <Footer />
    </>
  )
}
