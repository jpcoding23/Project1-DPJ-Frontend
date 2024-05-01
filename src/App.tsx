import React, { createContext } from 'react';
import './App.css';
import NavAdmin from './ComponentP1/NavAdmin/NavAdmin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHomePage from './ComponentP1/AdminHomePage/AdminHomePage';
import CreateAdminAcct from './ComponentP1/CreateAdminAcct/CreateAdminAcct';
import LoginAdmin from './ComponentP1/LoginAdmin/LoginAdmin';
import DashboardAdmin from './ComponentP1/DashboardAdmin/DashboardAdmin';
import ManageUsers from './ComponentP1/ManageUsers/ManageUsers';
import ManageAccounts from './ComponentP1/ManageAccounts/ManageAccounts';


export const hiddenValueContext = createContext(29)

function App() {


  return (
    <>     
      <BrowserRouter>     
        <NavAdmin></NavAdmin>
        <h1>Best Bank</h1>
        <Routes>
          <Route path='/' element={<AdminHomePage />}></Route>
          <Route path='/register' element={<CreateAdminAcct />}></Route>
          <Route path='/login' element={<LoginAdmin />}></Route>
          <Route path='/dashboardadmin' element={<DashboardAdmin />}></Route>
          <Route path='/manageusers' element={<ManageUsers />}></Route>
          <Route path='/Manageaccounts' element={<ManageAccounts />}></Route>
        </Routes>
      </BrowserRouter >    
    </>
  );
}

export default App;
