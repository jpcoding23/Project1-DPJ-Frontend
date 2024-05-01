import React from 'react'
import { Link } from 'react-router-dom'

export default function UserNav() {
  return (
    <nav>
      <ul className="navbar">
        <Link className="navbar-link" to="/">Login</Link>
        <Link className="navbar-link" to="/dashboard">Dashboard</Link>
        {/* <Link to="/userprofile"></Link> */}
        <Link className="navbar-link" to="/accounts">Accounts</Link>
        {/* <Link to="/account"></Link> */}
        {/* <Link to="/transactions"></Link> */}
        <Link className="navbar-link" to="/transfer">Transfer</Link>
        {/* <Link to="/logout"></Link> */}
        
      </ul>
      
    </nav>
  )
}
