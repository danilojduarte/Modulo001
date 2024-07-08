import React from "react";
import logoImg from "../../assets/img/logo-2-removebg-preview.png";

import "./styles.css";


export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="Logo do planeta" />
            <h1>House Of Dragon</h1>
          </div>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Links</a></li>
            <li><a href="/">About us</a></li>
          </ul>
        </nav>
       </header>
    )
  }
}