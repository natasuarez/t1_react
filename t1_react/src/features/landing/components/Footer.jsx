import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-white border-top py-3 mt-auto shadow-sm">
      <div className="container">
        <div className="row align-items-center gy-2">
          
          {/* Marca / Logo Sencillo */}
          <div className="col-md-4 text-center text-md-start">
            <Link to="/" className="text-decoration-none d-inline-flex align-items-center gap-2">
              <span className="fs-5">👑</span>
              <span className="fw-bold text-dark fs-5 tracking-wide">AUREUM</span>
              <span className="text-muted small">| Fine Gold</span>
            </Link>
          </div>

          {/* Menú de enlaces rápidos en una sola línea */}
          <div className="col-md-4 text-center">
            <ul className="list-inline mb-0 small">
              <li className="list-inline-item mx-2">
                <Link to="/" className="text-secondary text-decoration-none">Inicio</Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link to="/cadenas" className="text-secondary text-decoration-none">Cadenas</Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link to="/anillos" className="text-secondary text-decoration-none">Anillos</Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link to="/inversion" className="text-secondary text-decoration-none">Inversión</Link>
              </li>
            </ul>
          </div>

          {/* Copyright y Derechos */}
          <div className="col-md-4 text-center text-md-end">
            <span className="text-muted small">
              © {new Date().getFullYear()} AUREUM. Todos los derechos reservados.
            </span>
          </div>

        </div>
      </div>
    </footer>
  )
}