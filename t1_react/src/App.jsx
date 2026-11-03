import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './features/landing/components/Header';
import { Main } from './features/landing/components/Main';
import { Footer } from './features/landing/components/Footer';

// Carga perezosa (Lazy loading) para separar los componentes en chunks y aligerar el bundle inicial
const Login = lazy(() => import('./features/auth/components/Login').then(m => ({ default: m.Login })));
const Rickandmorty = lazy(() => import('./features/landing/components/Rickandmorty').then(m => ({ default: m.Rickandmorty })));

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <Suspense fallback={<div className="text-center py-5 text-dark fw-semibold">Cargando contenido...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rickandmorty" element={<Rickandmorty />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;