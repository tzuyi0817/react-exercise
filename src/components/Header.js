import { Link } from 'react-router-dom'
import React from "react";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster' style={{ color: 'green' }}>Roster</Link></li>
        <li><Link to='/schedule' style={{ textDecoration: 'none' }}>Schedule</Link></li>
        <li><Link to='/form' style={{ color: 'red' }}>Form</Link></li>
        <li><Link to='/todo'>todo</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header