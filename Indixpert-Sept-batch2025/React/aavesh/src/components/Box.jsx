import React from "react";
import { useRef } from "react";
export default function Box(){
    const myBox=useRef();

    function colorChange(){
        myBox.current.style.backgroundColor="red";
    }

    return (
        <>
            <div className="box" ref={myBox}></div>
            <button onClick={colorChange}>click me</button>
        </>
    )
}
