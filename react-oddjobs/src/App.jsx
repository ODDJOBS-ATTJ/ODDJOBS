import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import RoleSelect from './pages/RoleSelect'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/forgot' element={ <ForgotPassword /> }/>
        <Route path='/role-select' element={ <RoleSelect /> }/>
      </Routes>
    </>
  )
}

export default App
