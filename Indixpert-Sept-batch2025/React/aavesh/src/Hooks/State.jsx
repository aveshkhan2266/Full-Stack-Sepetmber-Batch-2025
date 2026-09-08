import React from 'react'
import { useState } from 'react'
export default function State() {
    const [name, setName] = useState("Aavesh");
    const [num, setNum] = useState(0);
    function change() {
        if (num == 0) {
            setName("Rohan");
            setNum(1);
        } else {
            setName("Aavesh");
            setNum(0);
        }

    }

    return (
        <div>
            <h1>{name}</h1>

            <button onClick={change}>
                Click me
            </button>

        </div>
    );
}

