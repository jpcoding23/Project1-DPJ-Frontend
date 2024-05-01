import React from 'react'
import { IAccount } from '../../models/IAccount'
import { Link } from 'react-router-dom'


export default function AccountsCard(props:IAccount) {
    // console.log(props.id)
  return (
    <div className="card">
        <li key={props.id}></li>
    <h5 className="card-header">{props.accountNumber}</h5>
    <div className="card-body">
        <h5 className="card-title">{props.accountType}</h5>
        <p className="card-text">View Account Transactions</p>
        {/* <Link to={`account/${props.account_id}`} state={{props}} className="btn btn-primary">View</Link> */}
        
        <Link to={`${props.id}`} className="btn btn-primary">View</Link>
    </div>
    </div>

  )
}
