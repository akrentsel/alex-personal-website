import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

var styles = {
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div>
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
          <nav class="main">
							<ul>
								<li class="menu">
									<a class="fa-bars">
                    <Menu right styles={styles} width={200}>
                      <Link to="/"><h3>Home</h3></Link>
                      <Link to="/about">About</Link>
                      <Link to="/music">Music</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                    </Menu>
                  </a>
								</li>
							</ul>
						</nav>
        </header>
      </div>
    );
  }
}

export default NavBar;


// <nav class="main">
// <ul>
//   <li>
  // <Menu right styles={styles}>
  //   <li><Link to="/">Home</Link></li>
  //   <li><Link to="/about">About</Link></li>
  //   <li><Link to="/music">Music</Link></li>
  //   <li><Link to="/projects">Projects</Link></li>
  //   <li><Link to="/contact">Contact</Link></li>
  // </Menu>
//   </li>
// </ul>
// </nav>
