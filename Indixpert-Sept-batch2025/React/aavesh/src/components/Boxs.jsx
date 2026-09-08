import React, { useRef } from "react";

export default function Boxs() {
    const myBoxs = useRef();

    function colorChange() {
        myBoxs.current.style.backgroundColor = "red";
    }
    function colorChange2() {
        myBoxs.current.style.backgroundColor = "orange";
    }
    function colorChange3() {
        myBoxs.current.style.backgroundColor = "Blue";
    }
    function colorChange4() {
        myBoxs.current.style.backgroundColor = "green";
    }

    return (
        <>
            <div className="boxs" ref={myBoxs}></div>
            <button onClick={colorChange}>Red</button>
            <button onClick={colorChange2}>Orange</button>
            <button onClick={colorChange3}>Blue</button>
            <button onClick={colorChange4}>Green</button>
        </>
    )
}