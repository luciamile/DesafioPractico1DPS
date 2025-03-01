import React from 'react';

const CarritoPedidos = ({ carrito = [], eliminarDelCarrito }) => {
  return (
    <div className="carrito-container">
      <h2 className="carrito-title">Carrito de Pedidos</h2>
      {carrito.length === 0 ? (
        <p className="carrito-empty">No hay productos en el carrito.</p>
      ) : (
        <ul className="carrito-list">
          {carrito.map((item, index) => (
            <li key={index} className="carrito-item">
              {item.nombre} - Cantidad: {item.cantidad}
              <button className="carrito-btn" onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .carrito-container {
          background: #faf3e0;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .carrito-title {
          font-size: 1.8rem;
          color: #b85d1c;
          margin-bottom: 15px;
        }
        .carrito-empty {
          font-size: 1.2rem;
          color: #b85d1c;
        }
        .carrito-list {
          list-style: none;
          padding: 0;
        }
        .carrito-item {
          font-size: 1.2rem;
          color: #b85d1c;
          background: #fff;
          padding: 10px;
          border-radius: 5px;
          margin: 5px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .carrito-btn {
          background: #d35400;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 5px;
          transition: background 0.3s ease;
        }
        .carrito-btn:hover {
          background: #b84500;
        }
      `}</style>
    </div>
  );
};

export default CarritoPedidos;
