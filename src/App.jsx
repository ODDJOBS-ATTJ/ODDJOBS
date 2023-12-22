import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './General/Login';
import Register from './General/Register';
import RoleSelect from './General/Role-Select';
import ForgotPassword from './General/Forgot-Password';
import ChangePassword from './General/Change-Password';
import CustomerRoutes from './Views/Routes/customer';
import WorkerRoutes from './Views/Routes/worker';
import AdminRoutes from './Views/Routes/admin';
import Verification from './General/Verification';

function App() {
  return (
    <Routes>
      {/* this is supposed to be home but due to css conflicts, we decided to make it the login since the home page has no real purpose other than sending the user to the login page and introducing our site. 
      We do have the html version for all our pages though */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/verification' element={<Verification />} />
      <Route path="/role-select" element={<RoleSelect />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/customer/*" element={<CustomerRoutes />} />
      <Route path="/worker/*" element={<WorkerRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
