import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Home() {

 
    const [detail,detailset] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
        .then((result) => {
            // alert("ape working");
            //  console.log(result.data.users);
            detailset(result.data.users);
        })
        .catch((error) => {
            alert("api not working");
            // console.log(error)
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <img 
                        src={mydetail.images} 
                        alt="" />
                </div>
            </div>
        </>
    )
}