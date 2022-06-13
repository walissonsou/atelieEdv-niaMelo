import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart, delCart} from '../redux/Action/index';
import { useParams } from 'react-router';
import {NavLink} from 'react-router-dom';
export default function Product() {
  const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product));
    }

    useEffect(() => {
      const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false)      
      }
      getProduct();
    },[]);

    const Loading = () => {
      return (
        <div className="justify-content-center d-flex ">
          Loading...
        </div>
      )
    }

    const ShowProduct = () => {
      return (
        <>
          <div className="col-md-6 mt-5">
            <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>
          
          <div className="col-md-6 mt-5 text-start">
            <h4 className="text-uppercase text-black-50" >
              {product.category}
            </h4>          
            <h1 className="display-5">
              {product.title}
            </h1>    
            <h3 className="display-6 fw-bold my-4">
              ${product.price}
            </h3>

            <p className="lead"> {product.description}</p>
            
            <button className="btn btn-outline-dark me-3 py-2" onClick={() => addProduct(product)}>
              Adicionar ao carrinho
            </button>
            <NavLink className="btn btn-dark ms-2 px-3 py-2" to="/cart">
              Ir ao carrinho
            </NavLink>
          </div>
        </>
     )
  };   
  return (
    <div>
      <div className="container">
        <div className="row">
      {loading ? <Loading /> : <ShowProduct /> }
        </div>
      </div>
     
    </div>
  )
}
