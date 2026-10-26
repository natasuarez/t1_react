import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            
            {/* Tarjeta del formulario */}
            <div className="card border-0 shadow-sm rounded-4 p-4 p-sm-5 bg-white">
              
              {/* Encabezado / Logo */}
              <div className="text-center mb-4">
                <Link to="/" className="text-decoration-none d-inline-flex align-items-center gap-2 mb-2">
                  <span className="fs-2">👑</span>
                  <span className="fw-bold text-dark fs-3" style={{ letterSpacing: '1px' }}>
                    AUREUM
                  </span>
                </Link>
                <h2 className="fw-bold fs-4 text-dark mb-1">Iniciar Sesión</h2>
                <p className="text-muted small mb-0">
                  Ingresa a tu cuenta para gestionar tus compras
                </p>
              </div>

              {/* Formulario */}
              <form onSubmit={(e) => e.preventDefault()}>
                
                {/* Campo Email */}
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label fw-medium text-dark small">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control bg-light border-0 shadow-none py-2 px-3"
                    id="userEmail"
                    placeholder="nombre@ejemplo.com"
                    required
                  />
                  <div className="form-text text-muted" style={{ fontSize: '0.75rem' }}>
                    Nunca compartiremos tu correo con nadie más.
                  </div>
                </div>

                {/* Campo Contraseña */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label htmlFor="userPassword" className="form-label fw-medium text-dark small mb-0">
                      Contraseña
                    </label>
                    <a href="#" className="text-decoration-none text-muted small" style={{ fontSize: '0.75rem' }}>
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <input
                    type="password"
                    className="form-control bg-light border-0 shadow-none py-2 px-3"
                    id="userPassword"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Checkbox Recordarme */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberCheck"
                  />
                  <label className="form-check-label text-secondary small" htmlFor="rememberCheck">
                    Recordar mi sesión
                  </label>
                </div>

                {/* Botón Principal */}
                <button
                  type="submit"
                  className="btn fw-bold text-dark w-100 py-2 border-0 shadow-sm rounded-2"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  Ingresar a mi Cuenta
                </button>

              </form>

              {/* Enlace para Registrarse */}
              <div className="text-center mt-4 pt-3 border-top">
                <span className="text-muted small">¿Aún no tienes cuenta? </span>
                <Link to="/registro" className="fw-bold text-dark text-decoration-none small">
                  Regístrate aquí
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}