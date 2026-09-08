import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'


import Navbar from './components/Navbar';
import Api from './pages/Api'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/Api' element={<Api />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}