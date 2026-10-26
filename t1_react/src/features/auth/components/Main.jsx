import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

export const Main = () => {
  // Arreglo de objetos con las imágenes ya optimizadas para Lighthouse
  const productos = [
    {
      id: 1,
      titulo: 'Cadena Tejido Italiano',
      descripcion: 'Oro amarillo de 18K pulido con broche de seguridad reforzado.',
      precio: '$ 1.250.000 COP',
      pureza: '18K',
      imagen: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=70'
    },
    {
      id: 2,
      titulo: 'Lingote de Inversión 10g',
      descripcion: 'Oro puro 999.9 sellado al vacío con número de serie certificado.',
      precio: '$ 3.800.000 COP',
      pureza: '24K',
      imagen: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=400&q=70'
    },
    {
      id: 3,
      titulo: 'Anillo Solitario Imperial',
      descripcion: 'Anillo en oro fino de 18K con acabado artesanal pulido.',
      precio: '$ 980.000 COP',
      pureza: '18K',
      imagen: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=70'
    }
  ]

  return (
    <main className="bg-light text-dark min-vh-100">
      
      {/* 1. HERO BANNER PRINCIPAL */}
      <section className="bg-white border-bottom py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">
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

            <div className="col-lg-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=70" 
                alt="Joyería de oro fino"
                className="img-fluid rounded-4 shadow-lg border"
                style={{ maxHeight: '420px', objectFit: 'cover' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CINTA DE BENEFICIOS */}
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

      {/* 3. CATÁLOGO DE PRODUCTOS */}
      <section id="catalogo" className="py-5 container">
        <div className="text-center mb-5">
          <span className="text-uppercase text-muted fw-bold small d-block mb-1" style={{ letterSpacing: '2px' }}>
            Selección Exclusiva
          </span>
          <h2 className="fw-bold text-dark display-6">Piezas Destacadas</h2>
          <div className="mx-auto mt-2" style={{ width: '50px', height: '3px', backgroundColor: '#D4AF37' }}></div>
        </div>

        <div className="row g-4">
          {productos.map((prod) => (
            <ProductCard
              key={prod.id}
              titulo={prod.titulo}
              descripcion={prod.descripcion}
              precio={prod.precio}
              pureza={prod.pureza}
              imagen={prod.imagen}
            />
          ))}
        </div>
      </section>

    </main>
  )
}