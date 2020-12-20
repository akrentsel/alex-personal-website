import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "assets/css/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <header id="header">
          <h1>
            <Link to="/">Alex Krentsel</Link>
          </h1>
          <nav className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/teaching">Teaching</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav className="main">
            <ul>
              <li className="menu">
                <a className="fa-bars">
                  <Menu
                    isOpen={this.state.menuOpen}
                    onStateChange={state => this.handleStateChange(state)}
                    right
                    width={200}
                  >
                    <Link onClick={() => this.closeMenu()} to="/">
                      Home
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/about">
                      About
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/posts">
                      Posts
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/music">
                      Music
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/teaching">
                      Teaching
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/projects">
                      Projects
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/contact">
                      Contact
                    </Link>
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
