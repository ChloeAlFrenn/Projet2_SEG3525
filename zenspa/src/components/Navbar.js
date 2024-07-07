import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
    <div className='left_section'>
        <Link to="/" className='links'> ZenSpa </Link>
    </div>
    <div className='right_section'>
        <Link to="/" className='links'> Accueil </Link>
        <Link to="/MassagesSoins" className='links'> MassagesSoins </Link>
        <Link to="/Reservation" className='links'> Reservation </Link>
        <Link to="/BienEtre" className='links'> BienEtre </Link>
    </div>
</div>
  )
}

export default Navbar