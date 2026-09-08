import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function About() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">

        {products.slice(0, 12).map((product) => (

          <div className="col-md-3 mb-4" key={product.id}>

            <div className="card">

              <img
                src={`https://picsum.photos/id/${product.id}/300/200`}
                className="card-img-top"
                alt={product.title}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {product.title}
                </h5>

                <p>ID: {product.id}</p>
              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  )
}