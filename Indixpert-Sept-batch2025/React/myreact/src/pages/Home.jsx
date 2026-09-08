import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export default function Home() {
 
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
      .then((result) => {
        // console.log(result.data);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });


  return (
    <>
      <div className="conatiner-fluid">
        <div className="row">
          {
            products.map((myProduct) => (
              <div className="col-sm-4 my-3 text-center">
                <div className="card">
                  <img src={myProduct.image} alt="" height={"400px"} className='card-img-top' />
                  <div className="card-body">
                    <h6 className='card-title'>{myProduct.title}</h6>
                    <h6 className='card-text my-3'>price :- <span className='text-danger'>${myProduct.price}</span></h6>
                    <button className='btn btn-warning'>Buy now</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
