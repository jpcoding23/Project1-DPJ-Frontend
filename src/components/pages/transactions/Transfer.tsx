import React, { SyntheticEvent, useEffect, useState } from 'react'
import { IUser } from '../../../models/IUser';
import axios from 'axios';
import { ITransaction } from '../../../models/ITransaction';
import { ITransactionType } from '../../../models/ITransactionType';
import { useNavigate } from 'react-router';
import TransferForm from '../../custom-components/TranferForm';

export default function Transfer() {
  const[user,setUser]=useState<IUser>();
  const[otherUser,setOtherUser]=useState<IUser>();
  const[email,setEmail]=useState<string>()
  const[transfer,setTransfer]=useState<ITransaction>()
  const[total,setTotal]=useState<number>(0)
  const[type,setType]=useState<ITransactionType>()
  const[userToUser,setUserToUser]=useState<boolean>(false)
  const navigate=useNavigate()
  
  
  let [loading,setLoading]= useState(true)

  useEffect(()=>{
    let getUser= async()=>{
      let res:any = await axios.get<IUser>("http://localhost:8080/"+"users/user",{
        params:{
          email: localStorage.getItem("email")
        }
      }).then(response=>{
        setLoading(false)
        setUser(response.data)
        return response.data
      }).catch(error => {
        console.log(error)
      })
    }
    getUser()
  },[])

  const searchByEmail= (e: React.   ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    }

    const handleEmail =async (e:SyntheticEvent) =>{
      try {
        e.preventDefault()
        let res = await axios.get('http://localhost:8080/'+"users/user", {
            params:{
              email: email
            }
        }).then( response=>{
          setOtherUser(response.data);
      });
    } catch (error: any) {
        // Handle Register error
        console.log(error)
    }}

    const submitTransferFormBetweenAccounts= async (e:SyntheticEvent,an1:number,an2:number) =>{
      e.preventDefault()
      let newTransaction:ITransaction={
        total:total,
        transactionType: type,
        sender :user,
        senderAccountNumber:an1,
        receiver:user,
        receiverAccountNumber:an2
      }
      try{
        
        let res :any=await axios.post('http://localhost:8080/'+'transactions',{
          newTransaction,
          params:{
            userToUser:false
          }
        }).then(response =>{
          setTransfer(response.data)
        })
        if(res.status===200){
          navigate(`/transactions/${transfer?.id}`)
        }

      }catch(error:any){
        console.log(error)
      }
    }

    const submitTransferFormBetweenUsers= async (e:SyntheticEvent) =>{
      e.preventDefault()
      let newTransaction:ITransaction={
        total:total,
        transactionType: type,
        sender :user,
        senderAccountNumber:user?.checkingAccountNumber,
        receiver:otherUser,
        receiverAccountNumber:otherUser?.checkingAccountNumber
      }
      try{
        
        let res :any=await axios.post('http://localhost:8080/'+'transactions',{
          newTransaction,
          params:{
            userToUser:true
          }
        }).then(response =>{
          setTransfer(response.data)
        })
        if(res.status===200){
          navigate(`/transactions/${transfer?.id}`)
        }

      }catch(error:any){
        console.log(error)
      }
    }

  return (
    <div>
      {loading && <div>...loading</div>}
      {!loading &&(
        <div>
          <TransferForm />
        </div>
      )}
      
      
    </div>
  )
}
