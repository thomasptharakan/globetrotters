import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

import About from '../pages/About';
import Results from '../pages/Results';

const NavPage = () => {
  return (
    <React.Fragment>
        <section>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/results" element={<Results />} />
                </Routes>
            </div>
        </section>
    </React.Fragment>
  )
}

export default NavPage