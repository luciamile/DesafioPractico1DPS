import React from 'react';

const Menu = ({ agregarAlCarrito }) => {
  const platillos = [
    { id: 1, nombre: 'Platillo 1', precio: 10, imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombre: 'Platillo 2', precio: 15, imagen: 'https://via.placeholder.com/150' },
    { id: 3, nombre: 'Platillo 3', precio: 20, imagen: 'https://via.placeholder.com/150' },
    { id: 4, nombre: 'Platillo 4', precio: 25, imagen: 'https://via.placeholder.com/150' },
    { id: 5, nombre: 'Platillo 5', precio: 30, imagen: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <h2>Menú</h2>
      <div className="menu-grid">
        {platillos.map((platillo) => (
          <div key={platillo.id} className="menu-item">
            <img src={platillo.imagen} alt={platillo.nombre} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{platillo.nombre}</h3>
              <p>${platillo.precio}</p>
              <button className="btn btn-primary" onClick={() => agregarAlCarrito(platillo)}>Agregar</button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
        }
        .menu-item {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .menu-item-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        .menu-item-details {
          padding: 10px;
        }
        .menu-item-details h3 {
          margin: 10px 0;
        }
        .menu-item-details p {
          margin: 5px 0;
        }
        .btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 4px;
        }
        .btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Menu;