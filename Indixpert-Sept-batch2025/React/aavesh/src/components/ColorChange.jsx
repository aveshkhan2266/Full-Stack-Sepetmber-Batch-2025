import React, { useRef } from "react";

export default function ColorChange() {

    const ChangeBox = useRef();
    const ChangeButton = useRef();

    function ColorChange() {

        if (ChangeButton.current.innerHTML === "Red") {

            ChangeBox.current.style.backgroundColor = "red";
            ChangeButton.current.innerHTML = "Blue";
        }
        else {
            ChangeBox.current.style.backgroundColor = "blue";
            ChangeButton.current.innerHTML = "Red";
        }
    }
    return (
        <>
            <div className="ColorBox" ref={ChangeBox}></div>
            <button ref={ChangeButton}onClick={ColorChange}>
                Red
            </button>
        </> 
    );
} 