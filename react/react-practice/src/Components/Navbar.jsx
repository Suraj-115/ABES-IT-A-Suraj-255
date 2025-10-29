import React from 'react'
import "./Navbar.css";
function Navbar(props) {
  return (
    <div id="nav">
      <h2>{props.college}</h2>
    </div>
  )
}

export default Navbar
