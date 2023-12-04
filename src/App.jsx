import React from 'react';
import {Route, Routes  } from 'react-router-dom';
import Login from './General/Login';
import Register from './General/Register';
import RoleSelect from './General/Role-Select';
import ForgotPassword from './General/Forgot-Password';
import ChangePassword from './General/Change-Password';
import UserProfile from './Views/Customer/User-Profile';
import UserProfileEdit from './Views/Customer/User-Profile-Edit';
import Billings from './Views/Customer/Billings';
import Services from './Views/Customer/Services';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role-select" element={<RoleSelect />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/customer/user-profile" element={<UserProfile />} />
        <Route path="/customer/user-profile-edit" element={<UserProfileEdit />} />
        <Route path="/customer/billings" element={<Billings />} />
        <Route path="/customer/services" element={<Services />} />
      </Routes>
  );
}

export default App;
