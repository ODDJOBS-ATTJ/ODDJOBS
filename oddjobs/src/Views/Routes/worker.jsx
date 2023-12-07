import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WorkerRegister from '../Worker/Worker-Register';
import UserProfile from '../Worker/User-Profile';
import UserProfileEdit from '../Worker/User-Profile-Edit';
import WorkerProfile from '../Worker/Worker-Profile';
import WorkerProfileEdit from '../Worker/Worker-Profile-Edit';
import Billings from '../Worker/Billings';
import Services from '../Worker/Services';
import ServicesCategories from '../Worker/Services-Categories';
import ServicesSearch from '../Worker/Services-Search';
import ServicesDetails from '../Worker/Services-Details';
import Bookings from '../Worker/Bookings';
import Completed from '../Worker/completed';
import Ongoing from '../Worker/ongoing';
import Pending from '../Worker/pending';
import Cancelled from '../Worker/cancelled';
import Approved from '../Worker/approved';

function WorkerRoutes() {
  console.log('WorkerRoutes rendered');
  return (
    <Routes>
      <Route path="/register" element={<WorkerRegister/>} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/profile/edit" element={<UserProfileEdit />} />
      <Route path="/worker-profile" element={<WorkerProfile />} />
      <Route path="/worker-profile/edit" element={<WorkerProfileEdit />} />
      <Route path="/billings" element={<Billings />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/categories" element={<ServicesCategories />} />
      <Route path="/services/search" element={<ServicesSearch />} />
      <Route path="/services/details" element={<ServicesDetails />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/bookings/completed" element={<Completed />} />
      <Route path="/bookings/ongoing" element={<Ongoing />} />
      <Route path="/bookings/pending" element={<Pending />} />
      <Route path="/bookings/cancelled" element={<Cancelled />} />
      <Route path="/bookings/approved" element={<Approved />} />
    </Routes>
  );
}

export default WorkerRoutes;
