import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
    <header id="header">
      <h1><Link to="/">Alex Krentsel</Link></h1>
      <nav className="links">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
    </header>

);

export default NavBar;

// <nav class="main">
//   <ul>
//     <li class="search">
//       <a class="fa-search" href="#search">Search</a>
//       <form id="search" method="get" action="#">
//         <input type="text" name="query" placeholder="Search" />
//       </form>
//     </li>
//     <li class="menu">
//       <a class="fa-bars" href="#menu">Menu</a>
//     </li>
//   </ul>
// </nav>