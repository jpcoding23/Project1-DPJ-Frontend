import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavDashAdmin from '../NavDashAdmin/NavDashAdmin';
import ManageUsers from '../ManageUsers/ManageUsers';
import ManageAccounts from '../ManageAccounts/ManageAccounts';

function DashboardAdmin() {
  return (
    <>
      <NavDashAdmin></NavDashAdmin>
    </>
  );
}

export default DashboardAdmin
