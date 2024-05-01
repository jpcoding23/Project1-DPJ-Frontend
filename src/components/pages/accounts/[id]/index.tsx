import React, { useEffect, useState } from 'react'
import { IAccount } from '../../../../models/IAccount'
import { useParams } from 'react-router'
import axios from 'axios';
import TransactionsCard from '../../../custom-components/TransactionsCard';

// export default function Account(props:IAccount) {
export default function Account() {
  const {id} = useParams()
  const[account,setAccount]=useState<IAccount>();
  let [loading,setLoading]= useState(true)

  useEffect(()=>{
    let getAccount=async ()=>{
    let res:any =await axios.get<IAccount>("http://localhost:8080/"+"accounts/"+id).then(response =>{
      setLoading(false);
      setAccount(response.data)
      }).catch(error =>{
        localStorage.removeItem("email")
        console.log(error)
      })
    }
    getAccount()
}
  ,[])

  return (
    <div>
      {loading && <div>...loading</div>}
      {!loading &&(
        <div>
          {account?.accountTransactions?.map(transaction =>{
            return(
              <>
                <li key={id}></li>
                <TransactionsCard {...transaction} accountNumber={account.accountNumber}/>

              </>
            )
          })}
          {/* <h1>{account?.id}</h1> */}

        </div>
      )}
      
    </div>
  )
}
