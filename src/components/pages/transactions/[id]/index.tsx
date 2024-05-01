import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ITransaction } from '../../../../models/ITransaction'
import axios from 'axios'

export default function Transaction() {
    const {id} = useParams()
    const[transaction,setTransaction]=useState<ITransaction>()
    let [loading,setLoading]= useState(true)
    console.log(id);
    useEffect(()=>{
        let getTransaction=async ()=>{
            let res:any =await axios.get<ITransaction>("http://localhost:8080/"+"transactions/"+id).then(response =>{
              setLoading(false);
              setTransaction(response.data)
              }).catch(error =>{
                localStorage.removeItem("email")
                console.log(error)
              })
            }
            getTransaction()
    },[])

  return (
    <div>
       {loading && <div>...loading</div>}
      {!loading &&(
        <>
            
        </>
      )}
    </div>
  )
}
