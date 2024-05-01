import React from 'react'
import { ITransaction } from '../../models/ITransaction'
import { Link } from 'react-router-dom'

export default function TransactionsCard(props:ITransaction) {
    console.log(props)
  return (
    <table className="table">
    <thead className="table-light">
        <tr>
            <th>Transaction ID</th>
            <th>Account Number</th>
            <th>Type</th>
            <th>Total</th>
            <th>Date</th>
            <th>Time</th>
        </tr> 
    </thead>
    <tbody>
      <tr>
        <td><Link to={`/transactions/${props.id}`}>{props.id}</Link></td>
        <td>{props.accountNumber}</td>
        <td>{props.transactionType}</td>
        <td>{props.total}</td>
        <td>{props.date?.toString()}</td>
        <td>{props.time?.toString()}</td>
        
      </tr>
    </tbody>
  </table>
  )
}
