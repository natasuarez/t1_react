import React from 'react'
import Header from './features/landing/components/Header'
import { Main } from './features/landing/components/Main'
import { Footer } from './features/landing/components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './features/auth/components/Login'
import { Rickandmorty } from './features/landing/components/Rickandmorty'



function App() {
  return (
    <>
      <BrowserRouter>

        <Header/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/rickandmorty' element={<Rickandmorty />} />
          </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App