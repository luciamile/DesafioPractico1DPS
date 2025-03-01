import React from 'react';

const ResumenPedido = ({ carrito = [] }) => {
  return (
    <div className="resumen-container">
      <h2 className="resumen-title">Resumen del Pedido</h2>
      {carrito.length === 0 ? (
        <p className="resumen-empty">No hay productos en el carrito.</p>
      ) : (
        <ul className="resumen-list">
          {carrito.map((item, index) => (
            <li key={index} className="resumen-item">
              {item.nombre} - Cantidad: {item.cantidad}
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .resumen-container {
          background: rgb(247, 157, 54);
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .resumen-title {
          font-size: 1.8rem;
          color: rgb(26, 25, 25);
          margin-bottom: 15px;
        }
        .resumen-empty {
          font-size: 1.2rem;
          color: #b85d1c;
        }
        .resumen-list {
          list-style: none;
          padding: 0;
        }
        .resumen-item {
          font-size: 1.2rem;
          color: #b85d1c;
          background: #fff;
          padding: 10px;
          border-radius: 5px;
          margin: 5px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ResumenPedido;
