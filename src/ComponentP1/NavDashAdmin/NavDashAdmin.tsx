import React, { useState } from 'react'
import ManageUsers from '../ManageUsers/ManageUsers'
import ManageAccounts from '../ManageAccounts/ManageAccounts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import { IUser } from '../../Models/IUser';
import { IAccount } from '../../Models/IAccount';

function NavDashAdmin() {
   
    const [users, setUsers] = useState<IUser[]>([]);
    const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser>()
   
    /************************************************************************* */
    let getUsersOnClick = async() => {
      let res = await axios.get('http://localhost:8080/admins/users')
                      .then((response) => {
                          localStorage.setItem("firstName", response.data.firstName)
                          return response.data}
                      )
                      .catch( (error) => {
                          localStorage.removeItem("firstName")
                          console.error(error)
                      });
      setUsers(res)
  }

  /************************************************************************* */ 

  let getAccountsOnClick = async() => {
    let res = await axios.get('http://localhost:8080/admins/accounts')
                    .then((response) => {
                        localStorage.setItem("accountNumber", response.data.username)
                        return response.data}
                    )
                    .catch( (error) => {
                        localStorage.removeItem("accountNumber")
                        console.error(error)
                    });
      setAccounts(res)}

  /************************************************************************* */

  // let toggleLock = async(id: number, user: IUser) => {
  //   let res = await axios.patch(`http://localhost:8080/admins/user/status/${id}`, user)
  //   .then((response) => {
  //       return response.data;
  //   })
  //   .catch((error) => {
  //       console.error(error);
  //   });
  //   setCurrentUser(res);
  // }

  /************************************************************************* */


  return (
    <div>

      <div>
        <button onClick={getUsersOnClick}>Manage Users</button>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.id} {user.firstName} {user.lastName} {user.email} {user.password} {user.userStatus}  
              
              {/* {user.firstName} - {user.userStatus ? 'LOCKED' : 'UNLOCKED'}
                        <button onClick={() => toggleLock(user.id, user)}>
                            {user.userStatus ? 'UNLOCK' : 'LOCKED'}
                        </button> */}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={getAccountsOnClick}>Manage Accounts</button>
        <ul>
          {accounts.map(account => (
            <li key={account.id}>{account.id} {account.accountType} {account.accountNumber} {account.accountOwner} {account.balance} {account.accountStatus}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default NavDashAdmin
