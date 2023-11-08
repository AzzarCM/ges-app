import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../app/pages/Home'
import { Contact } from '../app/pages/Contact'
import { EnergyEffiency } from '../app/pages/EnergyEffiency'
import { Proyects } from '../app/pages/Proyects'
import { Services } from '../app/pages/Services'
import { About } from '../app/pages/About'

import { Navbar } from '../app/components/Navbar'

export const AppRouter = () => {
  return (
<>
<Navbar/>
    <Routes>
        <Route path='home' element={ <Home/> }/>
        <Route path='contact' element={ <Contact/> }/>
        <Route path='energy-effiency' element={ <EnergyEffiency/> }/>
        <Route path='proyects' element={ <Proyects/> }/>
        <Route path='services' element={ <Services/> }/>
        <Route path='about' element={ <About/> }/>

        <Route path='/' element={ <Navigate to="/home"/>}/>

        <Route path="*" element={ <Navigate to="/"/>}/>
    </Routes>
    </>
  )
}
