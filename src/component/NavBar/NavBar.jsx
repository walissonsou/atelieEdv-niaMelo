import React from "react";
import logo from './logo.png'
import './styles.css';
export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img className="logo" src={logo}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <a className="nav-link disabled">PRODUTOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">SOBRE</a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">CONTATO</a>
              </li>
            </ul>
            <div classNameName="buttons">
              
            <a href="" className="btn btn-outline-dark " > <i className="fa fa-sign-in me-1"></i>Login </a>
            <a href="" className="btn btn-outline-dark ms-2"> <i className="fa fa-sign-in me-1"></i>Register </a>
            <a href="" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i>Carrinho </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
