import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Nav from "./components/Nav";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Nav/>}>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}