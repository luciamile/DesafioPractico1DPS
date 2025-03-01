import React from 'react';

const CarritoPedidos = ({ carrito = [], eliminarDelCarrito }) => {
  return (
    <div>
      <h2>Carrito de Pedidos</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - Cantidad: {item.cantidad}
              <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarritoPedidos;