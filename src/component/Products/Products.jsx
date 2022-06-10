import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <> 
      <div className="col-md-3">      
      <Skeleton height={350} />
      </div>
      <div className="col-md-3">      
      <Skeleton height={350} />
      </div>
      <div className="col-md-3">      
      <Skeleton height={350} />
      </div>
      <div className="col-md-3">      
      <Skeleton height={350} />
      </div>
      </>
    )
  };
  const filterProduct = (item) => {
    const updatedList = data.filter((e) => e.category === item);
    setFilter(updatedList)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> Todos </button>

          <button className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}> Bebê </button>

          <button className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}> Sala </button>

          <button className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("electronics")}> Escolar </button>
        </div>
        {filter.map((product) => {
          return (
            <> 
            <div className="col-md-3">
              <div class="card"> 
               <img class="card-img-top" src={product.image} alt={product.title} />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.title}</p>
                  <a href="#" class="btn btn-primary"> Comprar </a>
              </div>
            </div>
            </div>
            </>
          )
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              
              Ultimos produtos
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
