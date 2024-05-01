import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNav() {
  return (
    <nav>
      <ul>
        <Link to="/"></Link>
        <Link to="/dashboard"></Link>
        <Link to="/adminusers"></Link>
        <Link to="/adminaccounts"></Link>
        <Link to="/admindashboard"></Link>
        <Link to="/logout"></Link>
      </ul>
      
    </nav>
  )
}
