import React, { useEffect, useState } from 'react'
import { IAccount } from '../../../models/IAccount'
import { IUser } from '../../../models/IUser'
import axios from 'axios'
import AccountsCard from '../../custom-components/AccountsCard'


interface IAccountsProps{
  user:IUser,
  accounts:IAccount[]

}

export default function Accounts() {
  let [loading,setLoading]= useState(true)
  let [allAccounts,setAllAccounts] = useState<IUser>();
  // let [allAccount,setAllAccount] = useState<IUser>();
  // const BACKEND_URL= process.env.BACKEND_URL

  useEffect(() =>{
    let getAccounts = async () =>{
      // setLoading(true)
        let res:any =await axios.get<IUser>("http://localhost:8080/"+"users/"+1).then(response =>{
          localStorage.setItem("email",response.data.email)
          // console.log(response.data)
          setLoading(false);
        setAllAccounts(response.data)
        console.log(response.data)
          return response.data;
        }).catch(error => {
          localStorage.removeItem("email")
          console.log(error)
        })
        
        // console.log(allAccounts)

      
      
    }
    getAccounts();
  },[])
  
  return (
    <div>
      {loading && <div>...loading</div>}
      {!loading &&(
        <div>
          <h1>Accounts</h1>
    
          {allAccounts?.accounts.map(account => {
            // console.log(account)
            return(
              <>
              <li key={account.id}></li>
              <AccountsCard {...account} />
              </>
          )})}
        </div>
      )}
    </div>
  )
}
