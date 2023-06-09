import React from 'react'


import { Routes,Route,Navigate } from 'react-router-dom'

import Home from '../components/Home'
import Detailes from '../components/Detailes'


const Routers = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detailes/:_id' element={<Detailes/>}/>
      </Routes>
    </div>
  )
}

export default Routers
