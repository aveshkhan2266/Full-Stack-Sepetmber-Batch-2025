import React from "react";
import { useRef } from "react";

export default function Refrence() {
    const txt=useRef();

    function change(){
        txt.current.style.color="red";
    }
    return (
        <>
            <h1 ref={txt}>Hello</h1>
            <button onClick={change}>Change Color</button>
        </>
    )
}

