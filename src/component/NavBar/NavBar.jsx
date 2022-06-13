import React from "react";
import logo from './logo.png'
import './styles.css';

import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';


export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
          <img className="logo" src={logo}/>
          </NavLink>
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
                <NavLink className="nav-link active" aria-current="page"  to="/products">PRODUTOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">SOBRE
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"  to="/contact">CONTATO
                </NavLink>
              </li>
            </ul>
            <div classNameName="buttons">
              
            <NavLink to="/login" className="btn btn-outline-dark " > <i className="fa fa-sign-in me-1"/> Login </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2"> <i className="fa fa-sign-in me-1"/> Register </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"/> Carrinho ({state.length}) </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
