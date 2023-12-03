import { useState } from 'react'
import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/forgot' element={ <ForgotPassword /> }/>
      </Routes>
    </>
  )
}

export default App
