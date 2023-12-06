import React from 'react'
import { Route, Routes } from "react-router-dom"
import WorkerRegister from './Worker/workerRegister';
import UserProfile from './Worker/userProfile';
import UserProfileEdit from './Worker/userProfileEdit'
import WorkerProfile from './Worker/workerProfile';
import WorkerProfileEdit from './Worker/workerProfileEdit';
import WorkerServices from './Worker/workerServices';
import ServiceDetails from './Worker/serviceDetails';
import ServiceSearch from './Worker/serviceSearch';
import WorkerBookings from './Worker/workerBookings';
import OnGoing from './Worker/ongoing';
import Pending from './Worker/pending';
import Cancelled from './Worker/cancelled';
import Approved from './Worker/approved';
import Completed from './Worker/completed';
import WorkerBillings from './Worker/workerBillings';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<WorkerRegister/>}/>
        <Route path='/userProfile' element={<UserProfile/>}/>
        <Route path='/userProfile/edit' element={<UserProfileEdit/>}/>
        <Route path='/workerProfile' element={<WorkerProfile/>}/>
        <Route path='/workerProfile/edit' element={<WorkerProfileEdit/>}/>
        <Route path='/workerServices' element={<WorkerServices/>}/>
        <Route path='/workerServices/serviceDetails' element={<ServiceDetails/>}/>
        <Route path='/workerServices/search' element={<ServiceSearch/>}/>
        <Route path='/workerBookings' element={<WorkerBookings/>}/>
        <Route path='/workerBookings/onGoing' element={<OnGoing/>}/>
        <Route path='/workerBookings/pending' element={<Pending/>}/>
        <Route path='/workerBookings/approved' element={<Approved/>}/>
        <Route path='/workerBookings/completed' element={<Completed/>}/>
        <Route path='/workerBookings/cancelled' element={<Cancelled/>}/>
        <Route path='/workerBillings' element={<WorkerBillings/>}/>
      </Routes>
    </>
  );
}

export default App;
