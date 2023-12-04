import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom"

import "../../ODDJOBS/General/home/CSS+JS/home.css"
import "../../ODDJOBS/General/home/CSS+JS/default.css"

import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import RoleSelect from './pages/RoleSelect'
import WorkersProfile from './pages/Workers/WorkersProfile'

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/forgot' element={ <ForgotPassword /> }/>
        <Route path='/role-select' element={ <RoleSelect /> }/>
        <Route path='/workers-profile' element={ <WorkersProfile/> }/>
      </Routes>
    </>
  )
}

export default App
