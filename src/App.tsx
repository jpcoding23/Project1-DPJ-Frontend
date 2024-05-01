import React, { createContext } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout';
import Accounts from './components/pages/accounts/Accounts';
import Transfer from './components/pages/transactions/Transfer';
import Dashboard from './components/pages/dashboard/Dashboard';
import Head from './components/html-components/head/Head';
import Footer from './components/html-components/footer/Footer';
import Header from './components/html-components/header/header';
import Account from './components/pages/accounts/[id]';
import Transaction from './components/pages/transactions/[id]';


function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout children={<Dashboard />}/>}></Route>
          {/* <Route path='/logout' element={<Logout />}></Route>
          <Route path='/users' element={<User />}></Route> */}
          <Route path='/dashboard' element={<HomeLayout children={<Dashboard />}/>}></Route>
          <Route path='/accounts' element={<HomeLayout children={<Accounts />}/>}></Route>
          <Route path='/accounts/:id'  element={<HomeLayout children={<Account />}/>}></Route>
          <Route path='/transactions/:id' element={<HomeLayout children={<Transaction />}/>}></Route>
          <Route path='/transfer' element={<HomeLayout children={<Transfer />}/>}></Route>
          {/* <Route path='/adminusers' element={<AdminUsers />}></Route>
          <Route path='/adminaccounts' element={<AdminAccounts />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
