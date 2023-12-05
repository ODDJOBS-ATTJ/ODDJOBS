import React from 'react';
import {Route, Routes, Link } from 'react-router-dom';
import AdminLogin from './Views/Admin/adminLogin';
import AdminRegister from './Views/Admin/adminRegister';
import AdminForgotPassword from './Views/Admin/adminForgotPassword';
import AdminProfile from './Views/Admin/adminProfile';
import AdminProfileEdit from './Views/Admin/adminProfileEdit';
import AdminLog from './Views/Admin/adminLog';
import AdminApplication from './Views/Admin/adminApplication';
import AdminServiceManagement from './Views/Admin/adminServiceManagement';
import AdminUserManagement from './Views/Admin/adminUserManagement';
import ViewReports from './Views/Admin/viewReports';
import ServiceCreate from './Views/Admin/ServiceCreate';
import ServiceEdit from './Views/Admin/serviceEdit';
import ServiceView from './Views/Admin/serviceView';

function App() {
  return (
    <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/adminRegister" element={<AdminRegister/>} />
        <Route path="/adminForgotPassword" element={<AdminForgotPassword/>} />
        <Route path="/admin/profile" element={<AdminProfile/>} />
        <Route path="/admin/profile/edit" element={<AdminProfileEdit/>}/>
        <Route path="/admin/adminLog" element={<AdminLog/>}/>
        <Route path="/admin/application" element={<AdminApplication/>}/>
        <Route path="/admin/serviceManagement" element={<AdminServiceManagement/>}/>
        <Route path="/admin/serviceManagement/create" element={<ServiceCreate/>}/>
        <Route path="/admin/serviceManagement/edit" element={<ServiceEdit/>}/>
        <Route path="/admin/serviceManagement/view" element={<ServiceView/>}/>
        <Route path="/admin/userManagement" element={<AdminUserManagement/>}/>
        <Route path="/admin/userManagement/view" element={<ViewReports/>}/>
    </Routes>
  );
}

export default App;