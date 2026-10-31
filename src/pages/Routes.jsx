import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import PageNotFound from '@/components/PageNotFound'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Index