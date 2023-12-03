import React from 'react';
import {Route, Routes} from 'react-router-dom';
 {/* EDIT THIS TO YOUR OWN MODULE THAT U WORKIN ON */}
import Login from './General/Login';
import Register from './General/Register';
import RoleSelect from './General/Role-Select';

function App() {
  return (
    <Routes>
        {/* EDIT THIS TO YOUR OWN MODULE THAT U WORKIN ON */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role-select" element={<RoleSelect />} />
    </Routes>
  );
}

export default App;
