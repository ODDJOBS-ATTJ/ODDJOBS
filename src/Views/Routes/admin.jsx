import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminProfile from '../Admin/adminProfile';
import AdminProfileEdit from '../Admin/adminProfileEdit';
import AdminLog from '../Admin/adminLog';
import AdminApplications from '../Admin/adminApplications';
import AdminServiceManagement from '../Admin/adminServiceManagement';
import ServiceCreate from '../Admin/serviceCreate';
import ServiceEdit from '../Admin/serviceEdit';
import AdminUserManagement from '../Admin/adminUserManagement';
import ViewReports from '../Admin/viewReports';

function AdminRoutes() {
  console.log('AdminRoutes rendered');
  return (
    <Routes>
      <Route path="/profile" element={< AdminProfile/>} />
      <Route path="/profile/edit" element={<AdminProfileEdit/>} />
      <Route path="/logs" element={<AdminLog/>} />
      <Route path="/applications" element={<AdminApplications/>} />
      <Route path="/service-management" element={<AdminServiceManagement/>} />
      <Route path="/service-management/create" element={< ServiceCreate/>} />
      <Route path="/service-management/edit" element={< ServiceEdit/>} />
      <Route path="/user-management" element={<AdminUserManagement/>} />
      <Route path="/user-management/reports" element={<ViewReports/>} />
    </Routes>
  );
}

export default AdminRoutes;
