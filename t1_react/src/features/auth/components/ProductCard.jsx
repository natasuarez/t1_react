import React from 'react'

// Recibimos las props mediante desestructuración ({ imagen, titulo, descripcion, precio, pureza })
export const ProductCard = ({ imagen, titulo, descripcion, precio, pureza }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white">
        <div className="position-relative bg-light" style={{ height: '260px' }}>
          <img 
            src={imagen} 
            alt={titulo}
            className="w-100 h-100 object-fit-cover"
          />
          <span 
            className="position-absolute top-0 end-0 text-dark badge m-3 fw-bold rounded-2 px-3 py-2"
            style={{ backgroundColor: '#D4AF37' }}
          >
            {pureza}
          </span>
        </div>
        <div className="card-body p-4 d-flex flex-column text-center">
          <h5 className="card-title fw-bold text-dark mb-2">{titulo}</h5>
          <p className="card-text text-muted small flex-grow-1">
            {descripcion}
          </p>
          <div className="my-3">
            <span className="fs-4 fw-bold text-dark">{precio}</span>
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
  )
}