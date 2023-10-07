import React from 'react'
import { Route, Routes } from 'react-router-dom'
// pages 
import Pages from './pages'
import Auth from './Auth'

import Header from './components/Header'
import Footer from './components/Footer'
export default function Index() {
  return (<>
    <Routes>
      <Route path='/*' element={<Pages />} />
      <Route path='/auth/*' element={<Auth />} />
    </Routes>
  </>
  )
}
