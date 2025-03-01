import React from 'react';

const ResumenPedido = ({ carrito = [] }) => {
  return (
    <div>
      <h2>Resumen del Pedido</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>{item.nombre} - Cantidad: {item.cantidad}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumenPedido;