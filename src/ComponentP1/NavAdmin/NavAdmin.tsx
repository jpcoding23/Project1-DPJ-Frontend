import React from 'react'
import { Link } from 'react-router-dom'

function NavAdmin() {
  return (
    <div>
        <nav>
          <ul>
              <li><Link to="/">DPJ Banking</Link></li>
              <li><Link to="register">Create your account</Link></li>
              <li><Link to="login">Login</Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default NavAdmin
