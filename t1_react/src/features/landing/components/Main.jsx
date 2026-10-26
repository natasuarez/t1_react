import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <main className="bg-light text-dark min-vh-100">

      {/* 1. HERO BANNER PRINCIPAL (Fondo claro, texto oscuro de alto contraste) */}
      <section className="bg-white border-bottom py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            {/* Texto explicativo (Columna Izquierda) */}
            <div className="col-lg-6 text-center text-lg-start">
              <span 
                className="badge text-dark fw-bold mb-3 px-3 py-2 text-uppercase"
                style={{ backgroundColor: '#D4AF37', letterSpacing: '1px' }}
              >
                Joyería Fina & Inversión 2026
              </span>
              
              <h1 className="display-4 fw-bold text-dark mb-3">
                Elegancia y Valor en <span style={{ color: '#B8860B' }}>Oro Fino</span>
              </h1>

              <p className="fs-5 text-secondary mb-4 lh-base">
                Descubre nuestra exclusiva colección de joyas en oro puro de 18K y 24K. Cadenas, anillos y lingotes de inversión respaldados con certificado de autenticidad.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <a 
                  href="#catalogo" 
                  className="btn btn-lg fw-bold text-dark px-4 py-3 rounded-2 border-0 shadow-sm"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  Explorar Colección
                </a>
                <Link 
                  to="/inversion" 
                  className="btn btn-lg btn-outline-dark px-4 py-3 rounded-2 fw-semibold"
                >
                  Oro de Inversión
                </Link>
              </div>
            </div>

            {/* Imagen Destacada de Producto (Columna Derecha) */}
            <div className="col-lg-6 text-center">
              <div className="position-relative d-inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" 
                  alt="Joyería de oro fino"
                  className="img-fluid rounded-4 shadow-lg border"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CINTA DE BENEFICIOS (Organizados perfectamente en 3 columnas horizontales) */}
      <section className="py-4 bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="row g-4 text-center text-md-start">
            
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 p-2">
                <span className="fs-2">🛡️</span>
                <div>
                  <h6 className="fw-bold mb-1 text-dark text-uppercase">Autenticidad Garantizada</h6>
                  <small className="text-muted d-block">Certificado oficial en cada compra</small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 p-2">
                <span className="fs-2">🚚</span>
                <div>
                  <h6 className="fw-bold mb-1 text-dark text-uppercase">Envíos Asegurados</h6>
                  <small className="text-muted d-block">Entrega blindada a todo el país</small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 p-2">
                <span className="fs-2">💎</span>
                <div>
                  <h6 className="fw-bold mb-1 text-dark text-uppercase">Atención Personalizada</h6>
                  <small className="text-muted d-block">Asesoría con expertos orfebres</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CATÁLOGO DE PRODUCTOS (Tarjetas limpias con fotos de calidad verificadas) */}
      <section id="catalogo" className="py-5 container">
        <div className="text-center mb-5">
          <span className="text-uppercase text-muted fw-bold small d-block mb-1" style={{ letterSpacing: '2px' }}>
            Selección Exclusiva
          </span>
          <h2 className="fw-bold text-dark display-6">Piezas Destacadas</h2>
          <div className="mx-auto mt-2" style={{ width: '50px', height: '3px', backgroundColor: '#D4AF37' }}></div>
        </div>

        <div className="row g-4">
          
          {/* Producto 1: Cadena de Oro */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white">
              <div className="position-relative bg-light" style={{ height: '260px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80" 
                  alt="Cadena de oro 18K"
                  className="w-100 h-100 object-fit-cover"
                />
                <span 
                  className="position-absolute top-0 end-0 text-dark badge m-3 fw-bold rounded-2 px-3 py-2"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  18K
                </span>
              </div>
              <div className="card-body p-4 d-flex flex-column text-center">
                <h5 className="card-title fw-bold text-dark mb-2">Cadena Tejido Italiano</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Oro amarillo de 18K pulido con broche de seguridad reforzado.
                </p>
                <div className="my-3">
                  <span className="fs-4 fw-bold text-dark">$ 1.250.000 COP</span>
                </div>
                <button 
                  className="btn fw-bold text-dark w-100 rounded-2 py-2 border-0 shadow-sm"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 2: Lingote de Oro */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white">
              <div className="position-relative bg-light" style={{ height: '260px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80" 
                  alt="Lingote de Oro 24K"
                  className="w-100 h-100 object-fit-cover"
                />
                <span 
                  className="position-absolute top-0 end-0 text-dark badge m-3 fw-bold rounded-2 px-3 py-2"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  24K
                </span>
              </div>
              <div className="card-body p-4 d-flex flex-column text-center">
                <h5 className="card-title fw-bold text-dark mb-2">Lingote de Inversión 10g</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Oro puro 999.9 sellado al vacío con número de serie certificado.
                </p>
                <div className="my-3">
                  <span className="fs-4 fw-bold text-dark">$ 3.800.000 COP</span>
                </div>
                <button 
                  className="btn fw-bold text-dark w-100 rounded-2 py-2 border-0 shadow-sm"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 3: Anillo de Oro */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white">
              <div className="position-relative bg-light" style={{ height: '260px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80" 
                  alt="Anillo de oro 18K"
                  className="w-100 h-100 object-fit-cover"
                />
                <span 
                  className="position-absolute top-0 end-0 text-dark badge m-3 fw-bold rounded-2 px-3 py-2"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  18K
                </span>
              </div>
              <div className="card-body p-4 d-flex flex-column text-center">
                <h5 className="card-title fw-bold text-dark mb-2">Anillo Solitario Imperial</h5>
                <p className="card-text text-muted small flex-grow-1">
                  Anillo en oro fino de 18K con acabado artesanal pulido.
                </p>
                <div className="my-3">
                  <span className="fs-4 fw-bold text-dark">$ 980.000 COP</span>
                </div>
                <button 
                  className="btn fw-bold text-dark w-100 rounded-2 py-2 border-0 shadow-sm"
                  style={{ backgroundColor: '#D4AF37' }}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}