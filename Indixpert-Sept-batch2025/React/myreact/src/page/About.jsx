import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function About() {

    const [item, setitem] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((result) => {
                console.log(result.data);
                setitem(result.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                {item.slice(0, 12).map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="card">
                            <img
                                src={`https://picsum.photos/id/${item.id}/300/200`}
                                className="card-img-top"
                                alt={item.title}
                            />

                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.title}
                                </h5>
                                <p>ID: {item.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
