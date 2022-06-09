import React from "react";
import bg from "../../assets/bg.webp";
import Products from "../Products/Products";
const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src={bg} class="card-img" alt="background" height="600px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0 ">
            NOVA COLEÇÃO  </h5>
            <p class="card-text lead fs-0" > CONFIRA NOSSOS NOVOS PRODUTOS </p>
            </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
