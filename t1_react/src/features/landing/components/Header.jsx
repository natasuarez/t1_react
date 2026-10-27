import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-bottom sticky-top shadow-sm">
      {/* Cinta superior promocional */}
      <div 
        className="text-dark text-center py-1 fw-semibold small" 
        style={{ backgroundColor: '#F8F1E5', fontSize: '0.825rem' }}
      >
        ✨ Envíos asegurados a todo el país | Oro certificado 18K y 24K
      </div>

      <nav className="navbar container py-3">
        {/* Marca / Logo */}
        <NavLink className="navbar-brand d-flex align-items-center gap-2 m-0" to="/">
          <span className="fs-3">👑</span>
          <div className="lh-1">
            <span 
              className="fw-bold fs-4 d-block text-dark" 
              style={{ letterSpacing: '1px' }}
            >
              AUREUM
            </span>
            <span 
              className="text-uppercase text-muted d-block fw-semibold" 
              style={{ fontSize: '0.65rem', letterSpacing: '2px' }}
            >
              Fine Gold & Jewelry
            </span>
          </div>
        </NavLink>

        {/* Enlaces directos sin botón colapsable */}
        <ul className="navbar-nav flex-row gap-3 mb-0 ms-md-4 me-auto">
          <li className="nav-item d-none d-lg-block">
            <NavLink className="nav-link text-dark fw-medium py-0" to="/cadenas">
              Cadenas y Lingotes
            </NavLink>
          </li>
          <li className="nav-item d-none d-lg-block">
            <NavLink className="nav-link text-dark fw-medium py-0" to="/anillos">
              Anillos y Joyas
            </NavLink>
          </li>
          <li className="nav-item d-none d-lg-block">
            <NavLink className="nav-link text-dark fw-medium py-0" to="/inversion">
              Oro de Inversión
            </NavLink>
          </li>
        </ul>

        {/* Buscador, Carrito e Iniciar Sesión directos en línea */}
        <div className="d-flex align-items-center gap-2 ms-auto">
          
          {/* Buscador */}
          <form className="d-none d-md-flex" role="search">
            <div className="input-group">
              <input
                className="form-control bg-light border-end-0 shadow-none"
                type="search"
                placeholder="Buscar joyas..."
                aria-label="Buscar"
                style={{ fontSize: '0.875rem', width: '180px' }}
              />
              <button 
                className="btn btn-light border border-start-0 text-muted" 
                type="submit"
              >
                🔍
              </button>
            </div>
          </form>

          {/* Botón Carrito */}
          <NavLink
            to="/carrito"
            className="btn btn-outline-dark position-relative text-nowrap d-flex align-items-center gap-2 py-1 px-3"
          >
            <span>🛒</span>
            <span className="small fw-semibold d-none d-sm-inline">Carrito</span>
            <span 
              className="badge rounded-pill text-dark fw-bold"
              style={{ backgroundColor: '#D4AF37' }}
            >
              0
            </span>
          </NavLink>

          {/* Botón Iniciar Sesión DIRECTO */}
          <NavLink 
            to="/login" 
            className="btn fw-bold text-dark text-nowrap border-0 shadow-sm py-1 px-3"
            style={{ backgroundColor: '#D4AF37' }}
          >
            Iniciar Sesión
          </NavLink>
           <NavLink 
            to="/rickandmorty" 
            className="btn fw-bold text-dark text-nowrap border-0 shadow-sm py-1 px-3"
            style={{ backgroundColor: '#D4AF37' }}
          >
            Api
          </NavLink>


        </div>
      </nav>
    </header>
  )
}