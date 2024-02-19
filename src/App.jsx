/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Inicio from './views/Inicio'
import Proyectos from './views/Proyectos'
import Contacto from './views/Contacto'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Inicio /> }></Route>
        <Route path='/Proyectos' element={ <Proyectos /> }></Route>
        <Route path='/Contacto' element={ <Contacto /> }></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App