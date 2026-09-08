import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <ul className="nav bg-light py-2 justify-content-around">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
            </ul>
            <Outlet/>
        </>
    )
}