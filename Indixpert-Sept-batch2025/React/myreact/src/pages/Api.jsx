import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Api() {

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/carts")
        .then((result)=>{
            // console.log(result.data.carts[2].products);
            setData(result.data.carts[6].products);
        })
        .catch((err)=>{
            console.log(err);
        });
    });
  return (
    <div className='container'>
        <div className="row">
            {
                data.map((product)=>(
                    <div className="col-sm-4 my-3">
                        <div className="card">
                            <img src={product.thumbnail} alt=""  />
                            <div className="card-body text-center">
                                <h3 className='card-title'>{product.title}</h3>
                                <h3 className='card-text text-danger my-3'>${product.price}</h3>
                                <button className='btn btn-primary'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
