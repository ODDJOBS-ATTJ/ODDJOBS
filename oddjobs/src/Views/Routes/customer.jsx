import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from '../Customer/User-Profile';
import UserProfileEdit from '../Customer/User-Profile-Edit';
import Billings from '../Customer/Billings';
import Services from '../Customer/Services';
import ServicesCategories from '../Customer/Services-Categories';
import ServicesSearch from '../Customer/Services-Search';
import ServicesDetails from '../Customer/Services-Details';
import Bookings from '../Customer/Bookings';
import BookingsDetails from '../Customer/Bookings-Details';

function CustomerRoutes() {
  console.log('CustomerRoutes rendered');
  return (
    <Routes>
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-profile-edit" element={<UserProfileEdit />} />
      <Route path="/billings" element={<Billings />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services-categories" element={<ServicesCategories />} />
      <Route path="/services-search" element={<ServicesSearch />} />
      <Route path="/services-details" element={<ServicesDetails />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/bookings-details" element={<BookingsDetails />} />
    </Routes>
  );
}

export default CustomerRoutes;
