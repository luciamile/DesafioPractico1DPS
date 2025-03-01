import React from 'react';

const Menu = ({ agregarAlCarrito }) => {
  const platillos = [
    { id: 1, nombre: 'Platillo 1', precio: 10 },
    { id: 2, nombre: 'Platillo 2', precio: 15 },
    { id: 3, nombre: 'Platillo 3', precio: 20 },
  ];

  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {platillos.map((platillo) => (
          <li key={platillo.id}>
            {platillo.nombre} - ${platillo.precio}
            <button onClick={() => agregarAlCarrito(platillo)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;