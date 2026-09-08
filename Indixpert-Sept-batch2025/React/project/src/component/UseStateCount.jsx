import { Fragment, useState } from "react";

function UseStateCount() {
    const [count, setCount] = useState(0);

    const handleClickincrement1 = () => {
        if (count >= 10) {
            alert("“You can’t increase value above 10 )")
            return;
        }
        setCount(prev => prev + 1)
    }

    const handleClickdecrement1 = () => {

        if (count <= 0) {
            alert("You can’t decrease value below 0 ( zero )")
            return;
        }
        setCount(prev => prev - 1)
    }

    const handleClickincrement2 = () => {
        if (count >= 10) {
            alert("“You can’t increase value above 10 )")
            return;
        }
        setCount(prev => prev + 2)
    }
    const handleClickdecrement2 = () => {
        if (count <= 0) {
            alert("You can’t decrease value below 0 ( zero )")
            return;
        }
        setCount(prev => prev - 2)
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <Fragment>
            <h1 className="text-start text-primary fw-seimbold mt-2">Counter ( useState Hook ) = {count}</h1>
            <div className="d-flex  gap-4 align-items-center border-top py-3">
                <button onClick={handleClickincrement1} className="btn border border-3 border-primary    text-primary">Increment By 1</button>
                <button onClick={handleClickdecrement1} className="btn border border-3 border-primary text-primary">Decrement By 1</button>
                <button onClick={handleClickincrement2} className="btn border border-3 border-primary text-primary">Increment By 2</button>
                <button onClick={handleClickdecrement2} className="btn border border-3 border-primary text-primary">Decrement By 2</button>
                <button onClick={reset} className="btn border border-2 border-primary text-primary">Reset</button>
            </div>

        </Fragment>
    )
}

export default UseStateCount