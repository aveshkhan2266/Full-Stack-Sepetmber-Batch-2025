import { act, Fragment, useReducer } from "react";
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT_1":
            if (state >= 10) {
                alert("“You can’t increase value above 10 )")
                return state;
            }
            return state + 1;
        case "DECREMENT_1":
            if (state <= 0) {
                alert("You can’t decrease value below 0 ( zero )")
                return state;
            }
            return state - 1;
        case "INCREMENT_2":
            if (state >= 10) {
                alert("“You can’t increase value above 10 )")
                return state;
            }
            return state + 2;
        case "DECREMENT_2":
            if (state <= 0) {
                alert("You can’t decrease value below 0 ( zero )")
                return state;
            }
            return state - 2;
        case "RESET":
            return 0;

        default:
            return state;
    }
}
function UseReducerCount() {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <Fragment>

            <h1 className="text-start text-danger fw-seimbold mt-2">Counter ( useReducer Hook ) = {count}</h1>
            <div className="d-flex  gap-4 align-items-center border-top py-3 ">
                <button onClick={() => dispatch({ type: "INCREMENT_1" })} className="btn border border-3 border-danger text-danger">Increment By 1</button>
                <button onClick={() => dispatch({ type: "DECREMENT_1" })} className="btn border border-3 border-danger text-danger">Decrement By 1</button>
                <button onClick={() => dispatch({ type: "INCREMENT_2" })} className="btn border border-3 border-danger text-danger">Increment By 2</button>
                <button onClick={() => dispatch({ type: "DECREMENT_2" })} className="btn border border-3 border-danger text-danger">Decrement By 2</button>
                <button onClick={() => dispatch({ type: "RESET" })} className="btn border border-2 border-danger text-danger">Reset</button>
            </div>
        </Fragment>
    )
}
export default UseReducerCount