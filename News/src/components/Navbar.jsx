import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div style={{display:"flex", marginBottom:"50px"}}>
          <div>
            <Link to="/" style={{marginRight:"40px"}}>Home</Link>
            <Link to="/sport" style={{marginRight:"40px"}}>Sport</Link>
            <Link to="/economy" style={{marginRight:"40px"}}>Economy</Link>
            <Link to="/cultur" style={{marginRight:"40px"}}>Cultur</Link>
            <Link to="/health" style={{marginRight:"40px"}}>Health</Link>
            <Link to="/magazine" style={{marginRight:"40px"}}>Magazine</Link>
            <Link to="/nature" style={{marginRight:"40px"}}>Nature</Link>
            <Link to="/travel" style={{marginRight:"40px"}}>Travel</Link>
        </div>

        <div style={{marginLeft:"400px"}}>
        <Link to="/help" style={{marginRight:"30px"}}>Help</Link>
            <Link to="/about" style={{marginRight:"30px"}}>About</Link>
            <Link to="/contact" style={{marginRight:"30px"}}>Contact</Link>
        </div>
        </div>
    )
}
export default Navbar