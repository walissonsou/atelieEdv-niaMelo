import React from "react";
import logo from './logo.png'
import './styles.css';
export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
          <img className="logo" src={logo}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
                <a class="nav-link disabled">PRODUTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">SOBRE</a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled">CONTATO</a>
              </li>
            </ul>
            <div className="buttons">
              
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
