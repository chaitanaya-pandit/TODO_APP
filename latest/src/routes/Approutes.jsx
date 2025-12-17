import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy,Suspense } from 'react'
import Loader from '../components/Loader'

const Dashboard=lazy(()=>import('../pages/Dashboard'))
const Setting=lazy(()=>import('../pages/Setting'))
const Approutes = () => {
  return (
   <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
   </Suspense>
  )
}

export default Approutes;