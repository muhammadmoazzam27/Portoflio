import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import PageNotFound from '@/components/PageNotFound'
import Skills from './Skills'

const Frontend = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='projects' element={<Projects />} />
                <Route path='skills' element={<Skills />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Frontend