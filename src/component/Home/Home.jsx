import React from "react";
import bg from "../../assets/bg.webp";
const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src={bg} class="card-img" alt="background" height="589px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0 ">
            NOVA COLEÇÃO  </h5>
            <p class="card-text lead fs-0" > CHECK OUT ALL THE TRENDS </p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
